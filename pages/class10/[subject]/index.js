import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../../HELPERS/baseUrl'



const ADVMATHS =({classtensubjects})=>{
    

    const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'

    const router = useRouter();
    const { subject } = router.query;
    console.log(router.query);
    console.log(subject)


    const branchList = classtensubjects.map(AM=>{
    
    
    if(AM.subjectname === subject){

        const router = useRouter();
        const {subject } = router.query;
        
        return(
                 <>
                                {
                                    AM.chapter.map(ch=>{
                                        return(
                                            <>
                                            <Link href ={`/class10/${subject}/${ch.chaptername}`} > 
                                            <div className="branch-card">
                                                <div className="branch-photo-and-name">
                                                    <p>{ch.chaptername}</p>
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

         
        <div   style={{ backgroundSize:"cover" ,paddingTop:"20px", minHeight:"100vh"}}>
        <div style={{display:"flex" , flexWrap:"wrap"}}>
         {branchList}
        </div>
        </div>
    )
}

export default ADVMATHS;



export async function getServerSideProps(){

    const res = await fetch(`${baseUrl}/api/CLASS10/apiforsubject`)
    const classtensubjects = await res.json()
    return{
  
        props:{
            classtensubjects
        }
    }
  }


