import Link from 'next/link'
import {useState} from 'react'
import { useRouter } from 'next/router'
import baseUrl from '../HELPERS/baseUrl'




const PostDetail = ({posts , allposts})=>{



    return(
        <div className="bodu">
        <p>{allposts.postTitle}</p>
        <p className="postTitle" >{posts.postTitle}<p className="time">{posts.smallPost}</p></p>
         
        <div className="postdetail">
        
        <pre className="postInfo">{posts.post}</pre>
        <div className="description" >
        <img className="photo" src={posts.imageUrl}/><br/><br/>
        <label >{posts.writerName}</label><br/>
        <label >{posts.college}</label><br/>
        <label >{posts.branch}</label><br/>
        <label >Jee Mains : {posts.JEEMains}</label><br/>
        <label >Jee Advanced : {posts.JEEAdvanced}</label><br/>
        

        </div>
        </div>
        </div>
    )
}



// export async function getServerSideProps({params : {id}}) {

//     const res = await fetch(`${baseUrl}/api/${id}`);
   
//     const data = await res.json();
    
//     return {
//       props: {
//           posts :data 
        
//         }
//     }
//   }




  export async function getStaticProps({params : {id}}) {

    const res = await fetch(`${baseUrl}/api/${id}`);
   
    const data = await res.json();
    const res1 = await fetch(`${baseUrl}/api/post`)
    const questions = await res1.json()
    
    return {
      props: {
          posts :data ,
        allposts:questions
        }
    }
  }

export async function getStaticPaths(){
    const res = await fetch(`${baseUrl}/api/post`);
    const posts = await res.json()
    const paths = posts.map((post) => ({
        params: { id: post._id },
      }))
      return { paths, fallback: false }
} 




export default PostDetail;



