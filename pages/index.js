import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import baseUrl from '../HELPERS/baseUrl'
import {parseCookies} from 'nookies'
import ReactMarkdown from 'react-markdown'



export default function Home({posts}) {

  const [searchTerm , setsearchTerm] = useState("");


const POSTS = posts.sort(function(a, b) {
  var nameA = a.createdAt.toUpperCase(); // ignore upper and lowercase
  var nameB = b.createdAt.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }

  // names must be equal
  return 0;
});



  const postList = POSTS.map(post=>{

    const input = `${post.post}`; 

    return(
          
      
        <div class="card1" style={{borderRadius:"5px"}}>
            <div className="titleOfPost">
              <h4 class="card-img-top">{post.postTitle}</h4>
            </div>
        
            <Link href="/[id]" as={`/${post._id}`} >
            <div className="card-body1">
              <h5><i class="fa fa-user "></i>{post.writerName}</h5>
              <p>{post.college}</p>
                <ReactMarkdown className="post1" >
                {input}
                </ReactMarkdown>
              <label  className="card-button" style={{marginTop:"20px"}}> Read More</label> 
            </div>
            </Link>
            <div className="icon-container">
                <Link href={`https://api.whatsapp.com/send?text=${post.postTitle}igni-us.vercel.app/${post._id}`}><i className="fa fa-whatsapp icon" style={{fontSize:"20px"}} aria-hidden="true"></i></Link>
                <Link href={`https://www.facebook.com/sharer.php?u=igni-us.vercel.app/${post._id}`}><i class="fa fa-facebook icon" style={{fontSize:"20px"}} aria-hidden="true"></i></Link>
              </div>
            
            </div>
    )
    
    })

    const {token} = parseCookies();
    let admin = false;
    if(token){
        admin = true
    }
    else{
        admin = false
    }






  return (
    <div className="bodu"  >
      <Head>
        <title>IgniUS</title>
      </Head>

<main>
  {admin ?
  <>
    <div style={{marginTop:"120px" }}>
    </div>
  </>
  :
  <>
  </>  
}
  
<div style={{position:"relative" , top:"-100px" , background:"black" }} > 
        {/* <form className="form-inline">
            <input type="text"
            value={searchTerm}
            onChange={(e)=>{
                setsearchTerm(e.target.value);
            }}
            placeholder="Search" />
            </form> */}
            <div className="home_page_intro">
            <h1>IgniUs</h1>
            <p>“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz</p>
            </div>
            <img style={{ opacity:".4" , objectFit:"fill" , width:"100%" , height:"96vh"}} src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80 " alt="image" />
        </div>
  


      <div className="card-group1">
      {postList}
      </div>
    
        
    
        
</main>

     
    </div>
  )
}





export async function getServerSideProps(){

  const res = await fetch(`${baseUrl}/api/post`)
  const posts = await res.json()
  return{

      props:{
          posts
      }
  }
}

// export async function getStaticProps(){

//   const res = await fetch(`${baseUrl}/api/post`)
//   const posts = await res.json()
//   return{

//       props:{
//           posts
//       }
//   }
// }