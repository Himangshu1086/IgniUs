
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

const [classname , setclassname] = useState("");
const [title , settitle] = useState("");
const [subjectname , setsubjectname] = useState("");
const [name ,setname ] = useState("");
const [post , setpost] = useState("");
const [coverImage , setcoverImage] = useState("");
const [writerImage , setwriterImage] = useState("");
const [descriptionOfwriter , setdescriptionOfwriter] = useState("");
const [description , setdescription] = useState("");
const [date , setdate] = useState("");


const handleSubmit= async (e)=>{

    e.preventDefault();

    const res =  await fetch(`${baseUrl}/api/ADVMath/postForAdv` , {
       method:"PUT",
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({
        subjectname , name ,  date, coverImage , writerImage ,  title , post , descriptionOfwriter
       }) 

   })

   const res2 = await res.json()
   if(res2.error){
       console.log(res2.error)
   }
   else{
    alert(`Article Added in ${subjectname}`)
   }
}



const handleSubmittwo = async (e)=>{

    e.preventDefault();

    const resab =  await fetch(`${baseUrl}/api/ADVMath/advM` , {
       method:"PUT",
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({
         classname , subjectname ,description
       }) 

   })

   const resbc = await resab.json()
   if(resbc.error){
       console.log(resbc.error)
   }
   else{
    alert(`Chapter Added in ${classname}`)
   }
}



const handleSubmitPOST= async (e)=>{

    e.preventDefault();

    const res =  await fetch(`${baseUrl}/api/ADVMath/postForAdv` , {
       method:"POST",
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({
        subjectname , description
       }) 

   })

   const res2 = await res.json()
   if(res2.error){
       console.log(res2.error)
   }
   else{
    alert(`Place for writimg article is  Added for ${subjectname}`)
   }
}


    return(
        <div style={{minHeight:"100vh" , paddingTop:"280px" }}>
        <Head>
        <title>createAdvMathsPost</title>
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>


       
        



      
           <div className="container"  onSubmit={(e)=>handleSubmit(e)}>
           <label className="AskLabel">CREATE ARTICLE FOR ADVANCED MATHS :</label>
                <form className="formforask"  >


                <input className="form-control" type="text" placeholder="subject or chapter name"
                    name="subjectname" value={subjectname} required
                    onChange={(e)=>{setsubjectname(e.target.value)}}
                    /><br/>
                    


                    <input  className="form-control"  type="text" placeholder="WRITER NAME" 
                    name="name" value={name} 
                    onChange={(e)=>{setname(e.target.value)}} /><br/>

<input  className="form-control"  type="text" placeholder="descriptionOfwriter" 
                    name="descriptionOfwriter" value={descriptionOfwriter} 
                    onChange={(e)=>{setdescriptionOfwriter(e.target.value)}} /><br/>


<input  className="form-control" required  type="text" placeholder="eg : Monday Nov 28, 9:30 p.m." 
                    name="date" value={date} 
                    onChange={(e)=>{setdate(e.target.value)}} /><br/>

<input  className="form-control" type="text" placeholder="cover image url " 
                    name="coverImage" value={coverImage} 
                    onChange={(e)=>{setcoverImage(e.target.value)}} /><br/>


<input  className="form-control"  type="text" placeholder="person image url" 
                    name="writerImage" value={writerImage} 
                    onChange={(e)=>{setwriterImage(e.target.value)}} /><br/><br/>


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
       
       

        <div className="container"  onSubmit={(e)=>handleSubmittwo(e)}>
           <label className="AskLabel">CREATE CHAPTER FOR ADVANCED MATHS :</label>
                <form className="formforask"  >


                <input className="form-control" type="text" placeholder="classname(eg-Class 9 Assamese Medium)"
                    name="classname" value={classname} required
                    onChange={(e)=>{setclassname(e.target.value)}}
                    /><br/>

                <input className="form-control" type="text" placeholder="chapter name or subject"
                    name="subjectname" value={subjectname} required
                    onChange={(e)=>{setsubjectname(e.target.value)}}
                    /><br/>

                <input className="form-control" type="text" placeholder="description"
                    name="description" value={description} 
                    onChange={(e)=>{setdescription(e.target.value)}}
                    /><br/>

                    <input className="submitBtn" type="submit" />
                </form>
        </div>


        <div className="container" style={{paddingTop:"30px" }} onSubmit={(e)=>handleSubmitPOST(e)}>
           <label className="AskLabel">CREATE PLACE WITH SUBJECTNAME TO CREATE ARTICLE FOR ADVANCED MATHS :</label>
                <form className="formforask"  >


                <input className="form-control" type="text" placeholder="subject name"
                    name="subjectname" value={subjectname} required
                    onChange={(e)=>{setsubjectname(e.target.value)}}
                    /><br/>
                    <input className="form-control" type="text" placeholder="description"
                    name="description" value={description} required
                    onChange={(e)=>{setdescription(e.target.value)}}
                    /><br/>
                    <br/>
                    <input className="submitBtn" type="submit" />
                </form>
        </div>


       
        </div>





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