import Link from 'next/link'

const Admin = ({adminUser})=>{
    
    console.log(adminUser)
    return(
        <div style={{minHeight:"100vh"}}>
<div style={{paddingTop:"320px" }}></div>
<div style={{display:"flex",flexWrap:"wrap" , justifyContent:"center"}}>
                                <Link href ="/createPost" > 
                                <div className="branch-card" style={{border:"solid 2px red",height:"230px"}}>
                                    <div className="branch-photo-and-name">
                                        <p style={{fontSize:"30px" , paddingTop:"60px"}}>CREATE POST FOR HOME PAGE</p>
                                    </div>   
                                </div>
                                </Link>

                                <Link href ="/nitkCoursePost" > 
                                <div className="branch-card" style={{border:"solid 2px red",height:"230px"}}>
                                    <div className="branch-photo-and-name">
                                        <p style={{fontSize:"30px" , paddingTop:"60px"}}>CREATE COURSE POST FOR NITK </p>
                                    </div>   
                                </div>
                                </Link>

                                <Link href ="/createPostForAdvMath" > 
                                <div className="branch-card" style={{border:"solid 2px red",height:"230px"}}>
                                    <div className="branch-photo-and-name">
                                        <p style={{fontSize:"30px" , paddingTop:"60px"}}>CREATE COURSE POST FOR ADVANCED MATHS </p>
                                    </div>   
                                </div>
                                </Link>
                                <Link href ="/createPostForClass10" > 
                                <div className="branch-card" style={{border:"solid 2px red",height:"230px"}}>
                                    <div className="branch-photo-and-name">
                                        <p style={{fontSize:"30px" , paddingTop:"60px"}}>CREATE COURSE POST FOR CLASS10 </p>
                                    </div>   
                                </div>
                                </Link>
</div>


               <div style={{textAlign:"center" , padding:"20px" , fontSize:"30px" , margin:"40px"  , fontWeight:"bolder"}}><Link href="/OTHER"><a>OTHERS LINKS</a></Link></div> 
        </div>
    )
}

export default Admin

