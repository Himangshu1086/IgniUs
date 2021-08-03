import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../HELPERS/baseUrl'



const ADVMATHS =({advancedMaths})=>{
    


const branchList = advancedMaths.map(function(AM){
    const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'
    return(
        <>
            <Link href ={`/advancedMaths/${AM.classname}`} >   
            <div className="branch-card">
                <div className="branch-photo-and-name">
                    <p>{AM.classname}</p>
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
})






    return(

         
        <div   style={{ backgroundSize:"cover" ,paddingTop:"40px", minHeight:"100vh"  }}>
        <div style={{display:"flex" , flexWrap:"wrap" ,justifyContent:"center"}}>
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




