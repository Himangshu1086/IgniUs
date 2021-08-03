import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../../../HELPERS/baseUrl'



const ADVMATHS =({classtenposts})=>{
    

    const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'

    const router = useRouter();
    const { subject , chapter } = router.query;
    console.log(router.query);
    console.log(subject)


    const branchList = classtenposts.map(AM=>{
    
    
    if(AM.chaptername === chapter){

        const router = useRouter();
        const { subject , chapter } = router.query;
        
        return(
                 <>
                                {
                                    AM.post.map(po=>{
                                        return(
                                            <>
                                            <Link href ={`/class10/${subject}/${chapter}/${po._id}`} > 
                                            <div className="branch-card">
                                                <div className="branch-photo-and-name">
                                                    <p>{po.title}</p>
                                                </div>
                                                <div className="branch-card-description">
                                                    <p>
                                                        {para}
                                                    </p>
                                                </div>
                                            </div>  
                                    </Link>
                                            </>
                                        )
                                        
                                    })
                                }
                                    
                                </>
                            )
                        }
                    })

    return(

         
        <div   style={{backgroundSize:"cover" ,paddingTop:"20px", minHeight:"100vh"}}>
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


