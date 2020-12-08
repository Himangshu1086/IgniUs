
import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../../HELPERS/baseUrl'



const NITK =({years})=>{


const router = useRouter();
const {branch} = (router.query);


const branchList = years.map((year , i )=>{


    if(year.branchname === branch){
        const router = useRouter();
        const {branch} = (router.query);
        const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'


            return(
                <>
                    {year.year.map(yr=>{
                        return(
                            <>
                                <Link href ={`/nitk/${branch}/${yr.yearname}`} > 
                                <div className="branch-card" style={{height:"150px"} }>
                                    <div className="branch-photo-and-name">
                                        <p style={{fontSize:"20px"}}>{yr.yearname}</p>
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

         
        <div style={{ backgroundImage:`url(https://images.unsplash.com/photo-1446149330071-2f5996cb1b5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80)` , backgroundSize:"cover" ,paddingTop:"180px", minHeight:"100vh"}}>

        <p style={{textAlign:"center",color:"#ff8080",boxShadow:"0px 0px 14px black", margin:"0px 50px" ,padding:"10px",background:"#ffe6e6",fontWeight:"bolder",fontSize:"30px"}}>SELECT THE YEAR TO VIEW THE COURSES :</p>
        
        <div style={{display:"flex" , flexWrap:"wrap" ,paddingTop:"50px"}}>
         {branchList}
        </div>
        
        

        
        </div>
    )
}

export default NITK;


export async function getServerSideProps(){

    const res = await fetch(`${baseUrl}/api/NITK/year`)
    const years = await res.json()
    return{
  
        props:{
            years
        }
    }
  }






