import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import baseUrl from '../HELPERS/baseUrl'
import {parseCookies} from 'nookies'
import ReactMarkdown from 'react-markdown'



export default function Home({posts}) {

const [searchTerm , setsearchTerm] = useState("");




  const postList = posts.map(post=>{

    const input = `${post.post}`; 

    
    if(process.browser){const url = document.location.href;}
    return(
          
      
        <div class="card1">
            <div className="titleOfPost">
              <h4 class="card-img-top">{post.postTitle}</h4>
            </div>
        
            <div className="card-body1">
              <h5><i class="fa fa-user "></i>{post.writerName}</h5>
              <p>{post.college}</p>
              <ReactMarkdown className="post1" >
              {input}
              </ReactMarkdown>
              <Link href="/[id]" as={`/${post._id}`} ><label  className="card-button" style={{marginTop:"20px"}}> Read More</label></Link>
              
              
              
              
            </div>
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
    <div className="bodu">
      <Head>
        <title>Home</title>
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





// export async function getServerSideProps(){

//   const res = await fetch(`${baseUrl}/api/post`)
//   const posts = await res.json()
//   return{

//       props:{
//           posts
//       }
//   }
// }

export async function getStaticProps(){

  const res = await fetch(`${baseUrl}/api/post`)
  const posts = await res.json()
  return{

      props:{
          posts
      }
  }
}