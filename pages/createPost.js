
import {useState} from 'react'
import { useRouter } from 'next/router'
import baseUrl from '../HELPERS/baseUrl'
import {parseCookies} from 'nookies'



const createPost = ()=>{



const router = useRouter()
const [writerName , setwriterName] = useState("");
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
        writerName ,college ,JEEMains,JEEAdvanced,branch ,classXIIpercentage,XIICollege , postTitle , post,imageUrl:image , smallPost
       }) 

   })

   const res2 = await res.json()
   if(res2.error){
       console.log(res2.error)
   }
   else{
    console.log("SUCCESSFUL")
   }
   router.push("/")

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
        <>
           <div className="container" onSubmit={(e)=>handleSubmit(e)}>
           <label className="AskLabel">ADMIN PANEL :</label>
                <form className="formforask"  >
                    <input  className="form-control" required type="text" placeholder="WRITER NAME" 
                    name="writerName" value={writerName} 
                    onChange={(e)=>{setwriterName(e.target.value)}} /><br/>

                    <input className="form-control"   required type="text" placeholder="College"
                    name="college" value={college} 
                    onChange={(e)=>{setcollege(e.target.value)}}/><br/>


                    <input className="form-control" type="text" placeholder="JEEAdvanced "
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
                    


            
                    <input className="form-control"  type="text" placeholder="JEEMains"
                    name="JEEMains" value={JEEMains} 
                    onChange={(e)=>{setJEEMains(e.target.value)}}
                    /><br/>


                    <input className="form-control" type="text" placeholder="showPost"
                    name="smallPost" value={smallPost} 
                    onChange={(e)=>{setsmallPost(e.target.value)}}
                    /><br/>
                    <br/><br/>




                    <label className="AskLabel" for="exampleFormControlTextarea1">TITLE :</label>
                    <textarea required autoFocus className="form-control" id="exampleFormControlTextarea1" rows="3"
                     name="postTitle" value={postTitle} 
                     onChange={(e)=>{setpostTitle(e.target.value)}}
                        style={{width:"750px"}}
                    >3</textarea><br/>


                    <label className="AskLabel" autoFocus for="exampleFormControlTextarea1">POST : </label>
                    <textarea  required  autoFocus className="form-control" id="exampleFormControlTextarea1" rows="7"
                    name="post " value={post } 
                    onChange={(e)=>{setpost (e.target.value)}}
                        style={{width:"750px"}}
                    ></textarea><br/>
                    <input className="submitBtn" type="submit" />

                    

                </form>
            </div>
            <br/><br/>
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