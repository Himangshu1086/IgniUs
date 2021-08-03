import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import baseUrl from '../HELPERS/baseUrl'
import {parseCookies} from 'nookies'
import ReactMarkdown from 'react-markdown'
import Slideshow from './SlideShow'

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
    <div >
      <Head>
        <title>IgniUS</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>

      </Head>

<main>
  {admin ?
  <>
    <div>
    </div>
  </>
  :
  <>
  </>  
}
  
<div style={{position:"relative"}}> 
       
             <h1 className="home_page_intro_heading">IgniUs</h1>
              <p className="home_page_intro_para" >“If people are doubting how far you can go, go so far that you can’t hear them anymore.” <br></br> <strong> – Michele Ruiz</strong> </p>
            <Slideshow/>
        </div>
  


      <div className="card-group1">
      {postList}
      </div>
    
        
    
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>  
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