import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../../../HELPERS/baseUrl'
import ReactMarkdown from 'react-markdown'



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
                                                            <p className="postTitle" >{po.title}<p className="time">{po.date}</p></p>
                                                            
                                                            <div className="postdetail">
                                                                <ReactMarkdown className="postInfo">{input}</ReactMarkdown>
                            
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

         
        <div   style={{ paddingTop:"180px", minHeight:"100vh"}}>
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


