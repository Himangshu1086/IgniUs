import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../../HELPERS/baseUrl'


const ADVMATHS =({advancedMaths})=>{
    
    const router = useRouter();
    
    const { classes } = router.query;
    console.log(classes);
    console.log(router.query);

    const branchList = advancedMaths.map(AM=>{
    
    
    if(AM.classname === classes){

        const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'
        const router = useRouter();
        const { classes } = router.query;
            return(
                <>
                    {AM.subject.map(sub=>{
                        return(
                            <>
                                <Link href ={`/advancedMaths/${classes}/${sub.subjectname}`} >   
                                    <div className="branch-card">
                                        <div className="branch-photo-and-name">
                                            <p>{sub.subjectname}</p>
                                        </div>
                                        <div className="branch-card-description">
                                            <p>
                                                {para}
                                            </p>
                                            <button>Explore<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </Link>
                                
                            </>
                        )
                    })}  
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

    const res = await fetch(`${baseUrl}/api/ADVMath/advM`)
    const advancedMaths = await res.json()
    return{
  
        props:{
            advancedMaths
        }
    }
  }




