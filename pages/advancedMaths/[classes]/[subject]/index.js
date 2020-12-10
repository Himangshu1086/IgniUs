import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../../../HELPERS/baseUrl'


const ADVMATHS =({advancedmathsposts})=>{
    const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'

    const router = useRouter();
    const { classes , subject } = router.query;
    console.log(router.query);
    console.log(subject ,classes)


    const branchList = advancedmathsposts.map(AM=>{
    
    
    if(AM.subjectname === subject){

        const router = useRouter();
        const { classes , subject } = router.query;
        
        return(
                 <>
                                {
                                    AM.post.map(po=>{
                                        return(
                                            <>
                                            <Link href ={`/advancedMaths/${classes}/${subject}/${po._id}`} > 
                                            <div className="branch-card">
                                                <div className="branch-photo-and-name">
                                                    <img src={po.coverImage}/>
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

         
        <div   style={{ backgroundImage:`url(https://images.unsplash.com/photo-1500402448245-d49c5229c564?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)` , backgroundSize:"cover" ,paddingTop:"180px", minHeight:"100vh"}}>
        <div style={{display:"flex" , flexWrap:"wrap"}}>
         {branchList}
        </div>
        </div>
    )
}

export default ADVMATHS;


export async function getServerSideProps(){

    const res = await fetch(`${baseUrl}/api/ADVMath/postForAdv`)
    const advancedmathsposts = await res.json()
    return{
  
        props:{
            advancedmathsposts
        }
    }
  }




