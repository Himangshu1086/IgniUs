import Link from 'next/link'
import {useState} from 'react'
import { useRouter } from 'next/router'
import baseUrl from '../HELPERS/baseUrl'
import ReactMarkdown from 'react-markdown'



const PostDetail = ({posts})=>{
    
  const input = `${posts.post}`;

    return(
        <div className="bodu">
        <p className="postTitle" >{posts.postTitle}<p className="time">{posts.smallPost}</p></p>
         
        <div className="postdetail">
        <ReactMarkdown className="postInfo">{input}</ReactMarkdown>
        {/*<pre className="postInfo">{posts.post}</pre>*/}
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



