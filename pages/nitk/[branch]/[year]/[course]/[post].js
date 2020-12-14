import Link from 'next/link'
import baseUrl from '../../../../../HELPERS/baseUrl'
import {useRouter} from 'next/router'
import ReactMarkdown, { renderers } from 'react-markdown'
const ReactMarkdownWithHtml = require('react-markdown/with-html')



const NITK = ({colleges})=>{
const router = useRouter();
const{branch , year , course , post } = router.query;


            const branchList = colleges.map((college , i )=>{
                return(
                    <>{
                        college.post.map(po=>{
                            const router = useRouter();
                            const{branch , year , course , post } = router.query;
                            
                            if(po._id == post){
                                
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
                                            <ReactMarkdownWithHtml className="postInfo"  children={input} allowDangerousHtml />
                                            <div className="description" >
                                            <p style={{fontSize:"15px"}}>contributor</p>
                                            <img className="photo" src={po.personImg}/><br/><br/>
                                            <label >{po.name}</label><br/>
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
                    


                    
                    
                })
                

    return(
        <>
            <div style={{ minHeight:"100vh"}}>
                {branchList}
            </div>
            
        </>
    )
}

export default NITK;



export async function getServerSideProps(){

    const res = await fetch(`${baseUrl}/api/NITK/college`)
    const colleges = await res.json()

    
    return{
  
        props:{
            colleges
        }
    }
  }










