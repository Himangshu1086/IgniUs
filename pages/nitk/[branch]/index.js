import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
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
                                <div className="branch-card" style={{border:"solid 2px red",height:"200px"}}>
                                    <div className="branch-photo-and-name">
                                        <p style={{fontSize:"30px" , paddingTop:"60px"}}>{yr.yearname}</p>
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

         
        <>
        <div style={{paddingTop:"240px"}}></div>
        <h3 style={{textAlign:"center",padding:"20px"}}>SELECT THE YEAR TO VIEW THE COURSES :</h3>
        <div style={{display:"flex" , flexWrap:"wrap"}}>
        
         {branchList}
        </div>

        <div style={{marginBottom:"360px"}}></div>
        </>
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






