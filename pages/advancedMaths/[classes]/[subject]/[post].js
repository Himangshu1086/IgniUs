
import {useRouter} from 'next/router'
import baseUrl from '../../../../HELPERS/baseUrl'
import ReactMarkdown from 'react-markdown'


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




