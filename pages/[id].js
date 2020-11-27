import Link from 'next/link'
import {useState} from 'react'
import { useRouter } from 'next/router'
import baseUrl from '../HELPERS/baseUrl'




const PostDetail = ({posts})=>{



    return(
        <>
        <div className="postTitle " >{posts.postTitle}</div>
        <p className="time">
            created : Time : {posts.createdAt[11]}{posts.createdAt[12]}{posts.createdAt[13]}{posts.createdAt[14]}{posts.createdAt[15]}{posts.createdAt[16]}{posts.createdAt[17]}{posts.createdAt[18]} Date : {posts.createdAt[0]}{posts.createdAt[1]}{posts.createdAt[2]}{posts.createdAt[3]}{posts.createdAt[4]}{posts.createdAt[5]}{posts.createdAt[6]}{posts.createdAt[7]}{posts.createdAt[8]}{posts.createdAt[9]}</p> 
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
        </>
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



export default PostDetail;



