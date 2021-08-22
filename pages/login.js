
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
            cookie.set('token' , res2.token , {secure:true});
            router.push("/");
            alert("Welcome ")
            //window.location.reload();

        }
        

        



    }



    return(
        <>

                <div >
                <div class="login">
                <div class="container">
                    <h1 >LOGIN </h1>
                    <div class="login-form">
                   
                                    <form>
                                    <input  required type="text" 
                                    placeholder="Name"
                                    name="username"
                                    value={username}
                                    onChange={(e)=>{setusername(e.target.value)}}
                                    />

                                    <input required type="email"
                                    placeholder="email@example.com"
                                    name="Email"  
                                    value={Email} 
                                    onChange={(e)=>{setEmail(e.target.value)}} />
                                    <input  required type="password"
                                    placeholder="Password"
                                    name="password"  
                                    value={password} 
                                    onChange={(e)=>{setpassword(e.target.value)}} />
                                    
                                    
                                    <div class="forget-pass">
                                    <a href="#">Forgot Password ?</a>
                                    </div>
                                    <button onClick={handleSubmits}>LOG-IN</button>
                                    
                                    </form>
                    </div>

                </div>
                </div>
                </div>
                
        </>
       
        
    )
}

export default Login;


// <div className="container_login">
// <div className="form_login_container">
//     <form className="formforask" onSubmit={(e)=>handleSubmits(e)} >
//     <div><h1 className="AskLabel" >LOGIN </h1></div>
//     <input  className="form-control" required type="text" 
//     placeholder="Name"
//     name="username"
//     value={username}
//     onChange={(e)=>{setusername(e.target.value)}}
//     /><br/>

//     <input className="form-control" required type="email"
//      placeholder="email@example.com"
//      name="Email"  
//      value={Email} 
//      onChange={(e)=>{setEmail(e.target.value)}} /><br/>

//     <input className="form-control" required type="password"
//      placeholder="Password"
//      name="password"  
//      value={password} 
//      onChange={(e)=>{setpassword(e.target.value)}} /><br/>

//     <br/><br/>
//     <input className="submitBtn" type="submit"  />
// </form></div>
// <div className="Box_login"></div>
// </div>