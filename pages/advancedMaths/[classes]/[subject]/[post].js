import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../../../HELPERS/baseUrl'
import ReactMarkdown from 'react-markdown'
const ReactMarkdownWithHtml = require('react-markdown/with-html')



const ADVMATHS =({advancedmathspost})=>{
    
    const router = useRouter();
    const { classes , subject  , post } = router.query;
    console.log(router.query);
    console.log(subject ,classes)


    const branchList = advancedmathspost.map(AM=>{

    if(AM.subjectname === subject ){

        return(
            <>
               
                                {
                                    AM.post.map(po=>{
                                        
                                        if(po._id === post){

                                            const input = `${po.post}`;

                                            return(
                                                <>
                                                       <div className="bodu">
                                                            <p className="postTitle" >{po.title}<p className="time">{po.date}</p>
                                                            <div>
                                                                <Link href={`https://api.whatsapp.com/send?text=${po.title}igni-us.vercel.app/${po._id}`}><i className="fa fa-whatsapp icon" style={{fontSize:"20px"}} aria-hidden="true"></i></Link>
                                                                <Link href={`https://www.facebook.com/sharer.php?u=igni-us.vercel.app/${po._id}`}><i class="fa fa-facebook icon" style={{fontSize:"20px"}} aria-hidden="true"></i></Link>
                                                            </div>
                                                            </p>
                                                            
                                                            <div className="postdetail">
                                                                {/* <ReactMarkdown className="postInfo">{input}</ReactMarkdown> */}
                                                                <ReactMarkdownWithHtml className="postInfo"   children={input} allowDangerousHtml />
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

         
        <div   style={{ minHeight:"100vh"}}>
         {branchList}
        </div>
        
    )
}

export default ADVMATHS;


export async function getServerSideProps(){

    const res = await fetch(`${baseUrl}/api/ADVMath/postForAdv`)
    const advancedmathspost = await res.json()
    return{
  
        props:{
            advancedmathspost
        }
    }
  }




