import Link from 'next/link'
import {useRouter} from 'next/router'
import baseUrl from '../../../../HELPERS/baseUrl'



const NITK = ({courses})=>{

    const router = useRouter();
    const {branch ,year } = (router.query);

    const branchList = courses.map((course , i )=>{

        if(course.yearname === year)
        {
            const router = useRouter();
            const {branch ,year } = (router.query);
            const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'
                return(
                    <>
                        {course.course.map(cr=>{
                            return(
                                    <>
                                        <Link href ={`/nitk/${branch}/${year}/${cr.coursename}`} >  
                                            <div className="branch-card" style={{height:"150px"}}>
                                                <div className="branch-photo-and-name">
                                                    <p style={{fontSize:"30px" }}>{cr.coursename}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </>
                                    )
                                }
                            )
                        }
                     </>
                 )
        }
    })



    return(
        <div  style={{ backgroundImage:`url(https://images.unsplash.com/photo-1446149330071-2f5996cb1b5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80)` , backgroundSize:"cover" ,paddingTop:"240px", minHeight:"100vh"}}>
        <div  style={{textAlign:"center",padding:"20px",color:"#ff8080" , background:"#ffe6e6" , margin:" 10px 30px"}}><h3>LIST OF COURSES IN THE SECOND YEAR : </h3></div>
        <div style={{display:"flex" , flexWrap:"wrap"}}>
        {branchList}
        </div>
        </div>
    )
}

export default NITK;






export async function getServerSideProps(){

    const res = await fetch(`${baseUrl}/api/NITK/course`)
    const courses = await res.json()
    return{
  
        props:{
            courses
        }
    }
  }



