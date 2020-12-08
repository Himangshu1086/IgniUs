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
                                                    <img src={co.coverImg}/>
                                                <h1>{co.title}</h1>
                                                <p>{co.name}</p>  
                                                </div>
                                            </div>
                                        </Link>
                                    </>
                                )
                            })}
                        
                         </>
                     )
                
            }else {
                return(
                    <>
                    <h1 style={{background:"white" , margin:"40px 40px" ,fontWeight:"bolder"}}>NO POST RIGHT NOW......</h1>
                    </>
                )
            }
        })





    return(
        <div style={{ backgroundImage:`url(https://images.unsplash.com/photo-1500402448245-d49c5229c564?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)` , backgroundSize:"cover" ,paddingTop:"180px", minHeight:"100vh"}}>
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
