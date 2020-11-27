import Head from 'next/head'
import Link from 'next/link'
import baseUrl from '../HELPERS/baseUrl'

export default function Home({posts}) {


  const postList = posts.map(post=>{

    return(
          
      <Link href="/[id]" as={`/${post._id}`} >
        <div class="card1">
            <div className="titleOfPost">
              <h4 class="card-img-top">{post.postTitle}</h4>
            </div>
        
            <div className="card-body1">
              <h5>by {post.writerName}</h5>
              <p>{post.college}</p>
              <p className="post1" style={{overflow:"hidden" , height:"50px"}}>{post.post}</p>
              <label  className="card-button"> Read More</label>
              
            </div>
        </div>
      </Link>     
    
    )
    
    })







  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

<main>
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" />
      <button className="form-control btn" type="submit">Search</button>
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