import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../HELPERS/baseUrl'


const NITK =({nitks})=>{

const branchList = nitks.map(function(nitk){
    const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'
    return(
        <>
            <Link href ={`/nitk/${nitk.branch}`} >   
            <div className="branch-card">
                <div className="branch-photo-and-name">
                    <img src="https://images.unsplash.com/photo-1532454971774-3990903f4c6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"/>
                    <p>{nitk.branch}</p>
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

         
        <>
        <div style={{paddingTop:"200px"}}></div>
        <div style={{display:"flex" , flexWrap:"wrap"}}>
         {branchList}
        </div>

        <div style={{marginBottom:"100px"}}></div>
        </>
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




