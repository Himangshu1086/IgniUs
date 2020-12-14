import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../HELPERS/baseUrl'


const NITK =({nitks})=>{
    


const branchList = nitks.map(function(nitk){
    const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'
    return(
        <>
            <Link href ={`/nitk/${nitk.branch}`} >   
            <div className="branch-card" style={{borderRadius:"5px"}}>
                <div className="branch-photo-and-name">
                    <p><i class="fa fa-graduation-cap" aria-hidden="true"></i>{nitk.branch}</p>
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

         
        <div   style={{ backgroundSize:"cover" ,paddingTop:"180px", minHeight:"100vh"}}>
        <div style={{display:"flex" , flexWrap:"wrap"}}>
         {branchList}
        </div>
        </div>
    )
}

export default NITK;


export async function getServerSideProps(){

    const res = await fetch(`${baseUrl}/api/NITK/branch`)
    const nitks = await res.json()
    return{
  
        props:{
            nitks
        }
    }
  }




