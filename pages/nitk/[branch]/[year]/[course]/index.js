import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../../../../HELPERS/baseUrl'


const NITK = ({colleges})=>{
    
    const router = useRouter();
        const {branch ,year , course} = (router.query);


        const branchList = colleges.map((college , i )=>{


            if(college.coursename === course){
                const router = useRouter();
                const {branch ,year , course} = (router.query);

                    return(
                        <>
                            {college.post.map(co=>{
                                return(
                                    <>
                                        <Link href ={`/nitk/${branch}/${year}/${course}/${co._id}`} >   
                                            <div className="branch-card" >
                                                <div className="branch-photo-and-name">
                                                    <img style={{borderRadius:"10px" , width:"100%" ,height:"100px" , paddingBottom:"10px"}} src={co.coverImg}/>
                                                    <h5><i class="fa fa-book" aria-hidden="true"></i>{ co.title}</h5>
                                                <span>contributed by : {co.name}</span>  
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
        <div style={{ backgroundSize:"cover" ,paddingTop:"180px", minHeight:"100vh"}}>
        <div style={{display:"flex" , flexWrap:"wrap"}}>
         {branchList}
        </div>
        </div>
    )
}

export default NITK;

export async function getServerSideProps(){

    const res = await fetch(`${baseUrl}/api/NITK/college`)
    const colleges = await res.json()
    return{
  
        props:{
            colleges
        }
    }
  }
