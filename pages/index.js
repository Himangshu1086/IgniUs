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
          
      
        <div class="card1">
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
    <div className="bodu" style={{border:"solid 2px",minHeight:"100vh" , background:`url(https://images.unsplash.com/photo-1607340385476-7f47b5700026?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80)` , backgroundRepeat:"no-repeat" , backgroundSize:"cover"}}>
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
  {/* <div className="socialMedia" id="socialHandle">
  <a href="#" class="fa fa-facebook"></a>
  <a href="#" class="fa fa-twitter"></a>
  <a href="#" class="fa fa-google"></a>
  <a href="#" class="fa fa-linkedin"></a>
  <a href="#" class="fa fa-youtube"></a>
  <a href="#" class="fa fa-instagram"></a>

  </div> */}
  
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="text"
      value={searchTerm}
      onChange={(e)=>{
        setsearchTerm(e.target.value);
      }}
       placeholder="Search" />
    </form>

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