
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
const [writerName , setwriterName] = useState("");
const [ postCategory , setPostCategory] = useState("");
const [college , setcollege] = useState("");
const [JEEMains ,setJEEMains] = useState("");
const [JEEAdvanced ,setJEEAdvanced ] = useState("");
const [branch , setbranch] = useState("");
const [classXIIpercentage , setclassXIIpercentage] = useState("");
const [XIICollege , setXIICollege] = useState("");
const [postTitle , setpostTitle] = useState("");
const [post , setpost] = useState("");
const [imageUrl ,setimageUrl ] = useState("");
const [smallPost ,setsmallPost ] = useState("");


const handleSubmit= async (e)=>{


    e.preventDefault();

     const image = await imageUpload();

    const res =  await fetch(`${baseUrl}/api/post` , {
       method:"POST",
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({
        writerName ,postCategory,college ,JEEMains,JEEAdvanced,branch ,classXIIpercentage,XIICollege , postTitle , post,imageUrl:image , smallPost
       }) 

   })

   const res2 = await res.json()
   if(res2.error){
       console.log(res2.error)
   }
   else{
    console.log("SUCCESSFUL")
   }
   alert("POST ADDED")

}

const imageUpload = async ()=>{

    const data = new FormData()
    data.append('file',imageUrl)
    data.append('upload_preset' , "EduHub")
    data.append('cloud_name' , "jyoti1086")
    const res = await fetch("https://api.cloudinary.com/v1_1/jyoti1086/image/upload" , {
        method:"POST" ,
        body: data
    })
    const res2 = await res.json()
    return res2.url
}


    

    return(
        <div style={{minHeight:"100vh"}}>
        <Head>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="/richtext.min.css"/>
        </Head>
        <div>
         {admin ?<><div ></div></>:<></>}

           <div className="container" onSubmit={(e)=>handleSubmit(e)}>
           <label className="AskLabel">ADMIN PANEL :</label>
                <form className="formforask"  >
                    <input  className="form-control" required autoFocus type="text" placeholder="WRITER NAME" 
                    name="writerName" value={writerName} 
                    onChange={(e)=>{setwriterName(e.target.value)}} /><br/>

                    <input  className="form-control" required autoFocus type="text" placeholder="Post Category Type" 
                    name="postCategory" value={postCategory} 
                    onChange={(e)=>{setPostCategory(e.target.value)}} /><br/>

                    <input className="form-control"   required type="text" placeholder="present College"
                    name="college" value={college} 
                    onChange={(e)=>{setcollege(e.target.value)}}/><br/>


                    <input className="form-control" type="text" placeholder="JEEAdvanced rank "
                    name="JEEAdvanced " value={JEEAdvanced} 
                    onChange={(e)=>{setJEEAdvanced(e.target.value)}}/><br/>


                    <input className="form-control" type="text" placeholder="branch"
                    name="branch" value={branch} 
                    onChange={(e)=>{setbranch(e.target.value)}}/><br/>


                    <input className="form-control"  type="text" placeholder="classXIIpercentage"
                    name="classXIIpercentage" value={classXIIpercentage} 
                    onChange={(e)=>{setclassXIIpercentage(e.target.value)}}/><br/>

                    <input className="form-control" type="text" placeholder="XIICollege"
                    name="XIICollege" value={XIICollege} 
                    onChange={(e)=>{setXIICollege(e.target.value)}}/><br/>



                    
                        <div style={{marginBottom:"30px"}}>
                        <input className="form-control" type="file" multiple
                        id="media"
                        onChange={(e)=>{setimageUrl(e.target.files[0])}}
                        accept="image/*"
                        />
                        </div>
                    


            
                    <input className="form-control"  type="text" placeholder="JEEMains percentile"
                    name="JEEMains" value={JEEMains} 
                    onChange={(e)=>{setJEEMains(e.target.value)}}
                    /><br/>


                    <input className="form-control" type="text" placeholder=" Date: example : November 28 , Monday , 12:30 a.m "
                    name="smallPost" value={smallPost} required
                    onChange={(e)=>{setsmallPost(e.target.value)}}
                    /><br/>
                    <br/><br/>




                    <label className="AskLabel" for="exampleFormControlTextarea1">TITLE :</label>
                    <textarea required  className="form-control" id="exampleFormControlTextarea1" rows="3"
                     name="postTitle" value={postTitle} 
                     onChange={(e)=>{setpostTitle(e.target.value)}}
                    ></textarea><br/>


                  <label>POST ( in markdown ) : </label>
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