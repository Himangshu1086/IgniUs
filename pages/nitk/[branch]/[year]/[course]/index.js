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
                                                    <img src="https://images.unsplash.com/photo-1532454971774-3990903f4c6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"/>
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
                
            }
        })





    return(
        <>
        <div style={{paddingTop:"180px"}}></div>
        <div style={{display:"flex" , flexWrap:"wrap"}}>
         {branchList}
        </div>

        <div style={{marginBottom:"100px"}}></div>
        </>
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
