import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import baseUrl from '../HELPERS/baseUrl'

export default function Home({posts}) {

const [searchTerm , setsearchTerm] = useState("");

  const postList = posts.filter((post)=>{
    if (searchTerm == ""){
      return post
    }
    else if(post.posts.postTitle.toLowerCase().includes(searchTerm.toLowerCase())){
      return post
    }
  }).map(post=>{

    return(
          
      <Link href="/[id]" as={`/${post._id}`} >
        <div class="card1">
            <div className="titleOfPost">
              <h4 class="card-img-top">{post.postTitle}</h4>
            </div>
        
            <div className="card-body1">
              <h5><i class="fa fa-user "></i>{post.writerName}</h5>
              <p>{post.college}</p>
              <p className="post1" style={{overflow:"hidden" , height:"50px"}}>{post.post}</p>
              <label  className="card-button"> Read More</label>
              
            </div>
        </div>
      </Link>     
    
    )
    
    })







  return (
    <div className="bodu">
      <Head>
        <title>Home</title>
      </Head>

<main>
  <div className="socialMedia" id="socialHandle">
  <a href="#" class="fa fa-facebook"></a>
  <a href="#" class="fa fa-twitter"></a>
  <a href="#" class="fa fa-google"></a>
  <a href="#" class="fa fa-linkedin"></a>
  <a href="#" class="fa fa-youtube"></a>
  <a href="#" class="fa fa-instagram"></a>

  </div>
  
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