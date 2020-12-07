import { useState } from "react";
import baseUrl from '../HELPERS/baseUrl'
import {parseCookies} from 'nookies'


const Other = ()=>{


const [coursename , setcoursename] = useState("");
const [course , setcourse] = useState("");
const[year , setyear] = useState("");

const handleSubmit= async (e)=>{
    e.preventDefault();
    const res =  await fetch(`${baseUrl}/api/NITK/college` , {
       method:"POST",
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({
        coursename
       }) 

   })
   const res2 = await res.json()
   if(res2.error){
       console.log(res2.error)
   }
   else{
    alert("COURSE OF WRITING POST ADDED THE DATABASE (collection on college is added) ")
   }
   

}


const handleSubmitforcourse= async (e)=>{

    e.preventDefault();
    const res =  await fetch(`${baseUrl}/api/NITK/course` , {
       method:"PUT",
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({
        year , course
       }) 

   })

   const res2 = await res.json()
   if(res2.error){
       console.log(res2.error)
   }
   else{
    alert("Course Added")
   }
   

}



    return(
        <>
        <div style={{paddingTop:"300px"}}></div>
          <div style={{display:"block" , justifyContent:"center"}}>



          <h4>THIS IS FOR COURSE COLLECTION IN THE DATABASE :</h4> 
            <form style={{border:"solid 2px " , margin:"10px 10px"}} onSubmit={(e)=>handleSubmitforcourse(e)}>
               <p>add courses in the course collection</p>
               <input type="text" placeholder="year ( eg-CIVIL SECONDYEAR )"
                name="year" value={year} onChange={(e)=>{setyear(e.target.value)}}
               ></input><br/><br/>
               <input type="text" placeholder="course"
                name="course" value={course} onChange={(e)=>{setcourse(e.target.value)}}
               ></input><br/><br/>
               <input type="submit"></input>  
            </form><br/><br/><br/>



           <h4>THIS IS FOR COLLEGE COLLECTION IN THE DATABASE :</h4>

           <form style={{border:"solid 2px " , margin:"10px 10px"}} onSubmit={(e)=>handleSubmit(e)}>
               <p>TYPE THE COURSE NAME FOR WHICH YOU WANT TO ADD POST  </p>
               <input type="text" placeholder="coursename"
                name="coursename" value={coursename} onChange={(e)=>{setcoursename(e.target.value)}}
               ></input><br/><br/>
               <input type="submit"></input>  
            </form><br/><br/><br/> 



            
            </div>
            <div style={{paddingTop:"200px"}}></div>
        </>
    )
}

export async function getServerSideProps(ctx){
    const {token} = parseCookies(ctx)
    if(!token){
        const {res} = ctx;
        res.writeHead(302 , {Location :"/login"})
        res.end()
    }
    return{
        props :{}
    }
}



export default Other;

