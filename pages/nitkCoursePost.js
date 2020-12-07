
import {useState} from 'react'
import { useRouter } from 'next/router'
import baseUrl from '../HELPERS/baseUrl'
import {parseCookies} from 'nookies'
import Head from 'next/head'
import Link from 'next/link'


const createPost = ()=>{


    const {token} = parseCookies();
    let admin = false;
    if(token){
        admin = true
    }
    else{
        admin = false
    }



const router = useRouter()

const [course , setcourse] = useState("");
const [name , setname] = useState("");
const [title ,settitle ] = useState("");
const [post , setpost] = useState("");
const [date , setdate] = useState("");
const [coverImg , setcoverImg] = useState("");
const [personImg , setpersonImg] = useState("");

const handleSubmit= async (e)=>{

    e.preventDefault();

    const res =  await fetch(`${baseUrl}/api/NITK/college` , {
       method:"PUT",
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({
        course , name ,  date, coverImg , personImg ,  title , post
       }) 

   })

   const res2 = await res.json()
   if(res2.error){
       console.log(res2.error)
   }
   else{
    alert(`Post Added in ${course}`)
   }
   

}




    return(
        <>
        <Head>
        <title>createNitkPost</title>
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <div className="bodu">
         {admin ?<><div style={{marginTop:"120px" }}></div></>:<></>}

           <div className="container" onSubmit={(e)=>handleSubmit(e)}>
           <label className="AskLabel">CREATE ARTICLE FOR COURSES IN NITK :</label>
                <form className="formforask"  >


                <input className="form-control" type="text" placeholder="course"
                    name="course" value={course} required
                    onChange={(e)=>{setcourse(e.target.value)}}
                    /><br/>
                    


                    <input  className="form-control"  type="text" placeholder="WRITER NAME" 
                    name="name" value={name} 
                    onChange={(e)=>{setname(e.target.value)}} /><br/><br/><br/>


<input  className="form-control" required  type="text" placeholder="eg : Monday Nov 28, 9:30 p.m." 
                    name="date" value={date} 
                    onChange={(e)=>{setdate(e.target.value)}} /><br/><br/><br/>

<input  className="form-control" type="text" placeholder="cover image url " 
                    name="coverImg" value={coverImg} 
                    onChange={(e)=>{setcoverImg(e.target.value)}} /><br/><br/><br/>


<input  className="form-control"  type="text" placeholder="person image url" 
                    name="personImg" value={personImg} 
                    onChange={(e)=>{setpersonImg(e.target.value)}} /><br/><br/><br/>


                    <label className="AskLabel" for="exampleFormControlTextarea1">TITLE :</label>
                    <textarea required  className="form-control" id="exampleFormControlTextarea1" rows="3"
                     name="title" value={title} 
                     onChange={(e)=>{settitle(e.target.value)}}
                    ></textarea><br/>


                    <label className="AskLabel" autoFocus for="output">POST : 
                    </label>
                    <Link href="https://dillinger.io/"><h1 style={{cursor:"pointer"}}><a>CLICK HERE : MARKDOWN EDITOR TO WRITE POST</a></h1></Link>

                    <textarea  required  className="form-control abc" id="output" rows="7"
                    name="post" value={post} 
                    onChange={(e)=>{setpost (e.target.value)}}
                        
                    >     
                    </textarea><br/>
                    <input className="submitBtn" type="submit" />

                    

                </form>
            </div>
            <br/><br/>
        </div>
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



export default createPost;