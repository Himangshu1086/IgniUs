
import baseUrl from '../../../../../HELPERS/baseUrl'
import {useRouter} from 'next/router'
import ReactMarkdown from 'react-markdown'


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
                                            <p className="postTitle" >{po.title}<p className="time">posts.smallPost</p></p>
                                            
                                            <div className="postdetail">
                                            <ReactMarkdown className="postInfo">{input}</ReactMarkdown>
            
                                            <div className="description" >
                                        
                                            <img className="photo" src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.0-9/103464286_2877140332554396_5816010113233252354_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=jamUxnHf1DUAX8_wJBd&_nc_oc=AQm5lbpfrRbaIBQGcQHMrXT98uHWCsbt0p28Mcu7jQIdOIrknRZFkhOWkGvaqUojpv4&_nc_ht=scontent.fgau1-1.fna&oh=063be97e92336349cc898bbc46ddfa2c&oe=5FF24CAC"/><br/><br/>
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
            <div>
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










