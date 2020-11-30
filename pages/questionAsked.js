import baseUrl from '../HELPERS/baseUrl'
import {useRouter} from 'next/router'
import {parseCookies} from 'nookies'



const Questions = ({questions})=>{

    const {token} = parseCookies();
    let admin = false;
    if(token){
        admin = true
    }
    else{
        admin = false
    }

    const allQuestions = questions.map(question=>{


        const router = useRouter();  

        const questionDelete = async (pid)=>{
            {
                const res6 = await fetch(`${baseUrl}/api/askquestion` , {
                    method:"DELETE",
                    headers:{
                        'Content-Type':'application/json'
                       },
                    body:JSON.stringify({pid}) 
                })
                await res6.json();
                router.push("/questionAsked")
        
             }
        }



       
    
        return(
            

            <div  style={{background:"lightblue" , textAlign:"center" , margin:"30px 30px" ,fontFamily:"Allerta Stencil"}} >
                 
                    <p>NAME : {question.userName}<br/>
                
                    EMAIL : {question.Email}</p>
                
                    <p style={{fontSize:"20px"}} >QUESTION : <br/> {question.Questions}
                    <br/>{question.createdAt}
                    </p>
        <button style={{color:"white" , background:"red"}} onClick={()=>questionDelete(question._id)}
       >DELETE</button>
            </div>
            
            
        )
    })

    
    
    return(
        <div className="bodu">
        {admin ?
                <>
                    <div style={{marginTop:"120px" }}>
                    </div>
                </>
                :
                <>
            </> 
            }
            {allQuestions}
        </div>
    )
}




export default Questions;



export async function getServerSideProps(){

    const res = await fetch(`${baseUrl}/api/askquestion`)
    const questions = await res.json()
    return{
  
        props:{
            questions:questions
        }
    }
  }


//   export async function getStaticProps(){

//     const res = await fetch(`${baseUrl}/api/askquestion`)
//     const questions = await res.json()
//     return{
  
//         props:{
//             questions
//         }
//     }
//   }




