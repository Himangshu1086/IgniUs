import Link from 'next/link'
import {useState} from 'react'
import { useRouter } from 'next/router'
import baseUrl from '../HELPERS/baseUrl'
import ReactMarkdown from 'react-markdown'
const ReactMarkdownWithHtml = require('react-markdown/with-html')


const PostDetail = ({posts})=>{
 
  
 
  const input = `${posts.post}`;
 
  
  
    return(
      
        <div style={{minHeight:"100vh"}}>
        <p className="postTitle" >{posts.postTitle}<p className="time">{posts.smallPost}</p>
        <div>
                <Link href={`https://api.whatsapp.com/send?text=${posts.postTitle}igni-us.vercel.app/${posts._id}`}><i className="fa fa-whatsapp icon" style={{fontSize:"20px"}} aria-hidden="true"></i></Link>
                <Link href={`https://www.facebook.com/sharer.php?u=igni-us.vercel.app/${posts._id}`}><i class="fa fa-facebook icon" style={{fontSize:"20px"}} aria-hidden="true"></i></Link>
              </div>
        </p>
        
        
         
        <div className="postdetail">
        {/* <ReactMarkdown className="postInfo">{input}</ReactMarkdown> */}
        <ReactMarkdownWithHtml  className="postInfo" children={input} allowDangerousHtml />
        <div className="description" >
    
        <img className="photo" src={posts.imageUrl}/><br/><br/>
        <label >{posts.writerName}</label><br/>
        <label >{posts.college}</label><br/>
        <label >Jee Mains : {posts.JEEMains}</label><br/>
        <label >{posts.branch}</label><br/>
        <label >{posts.JEEAdvanced}</label><br/>
        

        </div>
        </div>
        </div>
    )
}



export async function getServerSideProps({params : {id}}) {

    const res = await fetch(`${baseUrl}/api/${id}`);
   
    const data = await res.json();
    
    return {
      props: {
          posts :data 
        
        }
    }
  }




//   export async function getStaticProps({params : {id}}) {

//     const res = await fetch(`${baseUrl}/api/${id}`);
   
//     const data = await res.json();
//     const res1 = await fetch(`${baseUrl}/api/post`)
//     const questions = await res1.json()
    
//     return {
//       props: {
//           posts :data ,
//         allposts:questions
//         }
//     }
//   }

// export async function getStaticPaths(){
//     const res = await fetch(`${baseUrl}/api/post`);
//     const posts = await res.json()
//     const paths = posts.map((post) => ({
//         params: { id: post._id },
//       }))
//       return { paths, fallback: false }
// } 




export default PostDetail;



