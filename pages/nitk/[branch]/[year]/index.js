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
                                            <div className="branch-card" style={{border:"solid 2px red",height:"150px"}}>
                                                <div className="branch-photo-and-name">
                                                    <p style={{fontSize:"30px" , paddingTop:"33px"}}>{cr.coursename}</p>
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
        <>
        <div style={{paddingTop:"200px"}}></div>
        <h3 style={{textAlign:"center",padding:"20px"}}>LIST OF COURSES IN THE SECOND YEAR : </h3>
        <div style={{display:"flex" , flexWrap:"wrap"}}>
        {branchList}
        </div>
        <div style={{paddingBottom:"30px"}}></div>
        </>
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



