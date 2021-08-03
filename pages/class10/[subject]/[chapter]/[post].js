import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../../../HELPERS/baseUrl'
import ReactMarkdown from 'react-markdown'
const ReactMarkdownWithHtml = require('react-markdown/with-html')


const ADVMATHS =({classtenposts})=>{
    

    const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'

    const router = useRouter();
    const { subject , chapter } = router.query;
    console.log(router.query);
    console.log(subject)


    const branchList = classtenposts.map(AM=>{
    
    
    if(AM.chaptername === chapter){

        const router = useRouter();
        const { subject , chapter  , post} = router.query;
        
        return(
                 <>
                                {
                                    AM.post.map(po=>{
                                        
                                        if(po._id === post){

                                            const input = `${po.post}`;

                                            return(
                                                <>
                                                       <div >
                                                            <p className="postTitle" >{po.title}<p className="time">{po.date}</p>
                                                            <div>
                                                                <Link href={`https://api.whatsapp.com/send?text=${po.title}igni-us.vercel.app/${po._id}`}><i className="fa fa-whatsapp icon" style={{fontSize:"20px"}} aria-hidden="true"></i></Link>
                                                                <Link href={`https://www.facebook.com/sharer.php?u=igni-us.vercel.app/${po._id}`}><i class="fa fa-facebook icon" style={{fontSize:"20px"}} aria-hidden="true"></i></Link>
                                                            </div>
                                                            </p>
                                                            
                                                            <div className="postdetail">
                                                                {/* <ReactMarkdown className="postInfo">{input}</ReactMarkdown> */}
                                                                <ReactMarkdownWithHtml className="postInfo"  children={input} allowDangerousHtml />
                                                            <div className="description">
                                                        
                                                            <img className="photo" src={po.writerImage}/><br/><br/>
                                                            <label >{po.name}</label><br/>
                                                            <label >{po.descriptionOfWriter}</label><br/>
                                                            </div>
                                                            </div>
                                                        </div> 
                                                </>
                                            )
                                        }
                                    })
                                }
                                    
                                </>
                            )
                        }
                    })

    return(

         
        <div   style={{ paddingTop:"20px", minHeight:"100vh"}}>
        <div style={{display:"flex" , flexWrap:"wrap"}}>
         {branchList}
        </div>
        </div>
    )
}

export default ADVMATHS;



export async function getServerSideProps(){

    const res = await fetch(`${baseUrl}/api/CLASS10/apiforclass10post`)
    const classtenposts = await res.json()
    return{
  
        props:{
            classtenposts
        }
    }
  }


