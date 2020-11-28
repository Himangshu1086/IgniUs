
import {useState} from 'react'
import { useRouter } from 'next/router'
import baseUrl from '../HELPERS/baseUrl'

const Ask =()=>{

    const router = useRouter()
    const [userName , setuserName] = useState("");
    const [Email , setEmail] = useState("");
    const [Questions ,setQuestions] = useState("");




    const handleSubmitQuestion = async (e)=>{


        e.preventDefault();
    
        const res =  await fetch(`${baseUrl}/api/askquestion` , 
        {
           method:"POST",
           headers:{
            'Content-Type':'application/json'
           },
           body:JSON.stringify({
            userName ,Email , Questions
           }) 
    
       })
        await res.json();
       alert("You will get the answer asap .Thank You ");
       router.push("/");
    
    }
    




    return(
        <>
            <div className="container">
                
                <form className="formforask" onSubmit={(e)=>handleSubmitQuestion(e)} >
                    <input  className="form-control" required type="text" 
                    placeholder="Enter your name"
                    name="userName"
                    value={userName}
                    onChange={(e)=>{setuserName(e.target.value)}}
                    /><br/>

                    <input className="form-control" required type="email"
                     placeholder="email@example.com"
                     name="Email"  
                     value={Email} 
                     onChange={(e)=>{setEmail(e.target.value)
                     document.getElementById("abc").style.display="flex";
                     }} /><br/>
                     <p style={{textAlign:"center" , background:"red" , color:"white" ,borderRadius:"20px", display:"none"}} id="abc">please enter your email correctly to get the answer through emails.</p>

                    <br/><br/>
                    <label className="AskLabel" for="exampleFormControlTextarea1">ASK QUESTION : </label>
                    <textarea  required autoFocus className="form-control"
                     id="exampleFormControlTextarea1" rows="3"
                     name="Questions" 
                     value={Questions}
                     onChange={(e)=>{setQuestions(e.target.value)}}
                      ></textarea><br/>
                     
                    <input className="submitBtn" type="submit" />

                    

                </form>
            </div>
            <div style={{marginTop:"230px"}}></div>
        </>
    )
}

export default Ask;