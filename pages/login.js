import Link from 'next/link'
import {useState} from 'react'
import { useRouter } from 'next/router'
import baseUrl from '../HELPERS/baseUrl'
import cookie from 'js-cookie'

const Login =()=>{

    const router = useRouter()
    const [username , setusername] = useState("");
    const [Email , setEmail] = useState("");
    const [password ,setpassword] = useState("");


    const handleSubmits = async (e)=>{

        e.preventDefault();
        const res = await fetch(`${baseUrl}/api/login` ,{
            method:"POST" ,
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username , Email ,  password
            })
        })
        
        const res2 = await res.json();
        if(res2.error){
            console.log(res2.error)
        }else{
            cookie.set('token' , res.token)
            router.push("/createPost");

        }
        

        



    }



    return(
        <>
             <div className="container" style={{border:"black solid 2px" , marginTop:"120px"}}>
             <h1 className="AskLabel" style={{textAlign:"center !important", marginTop:"50px"}}>LOGIN </h1>
                <form className="formforask" onSubmit={(e)=>handleSubmits(e)} >
                    <input  className="form-control" required type="text" 
                    placeholder="Name"
                    name="username"
                    value={username}
                    onChange={(e)=>{setusername(e.target.value)}}
                    /><br/>

                    <input className="form-control" required type="email"
                     placeholder="email@example.com"
                     name="Email"  
                     value={Email} 
                     onChange={(e)=>{setEmail(e.target.value)}} /><br/>


                    <input className="form-control" required type="password"
                     placeholder="Password"
                     name="password"  
                     value={password} 
                     onChange={(e)=>{setpassword(e.target.value)}} /><br/>


                    <br/><br/>
                    
                     
                    <input className="submitBtn" type="submit"  />

                    

                </form>
            </div>
            <div style={{marginTop:"230px"}}></div>
        </>
    )
}

export default Login;