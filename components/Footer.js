import Link from 'next/link'
import baseUrl from '../HELPERS/baseUrl'


const Footer =()=>{


    return(
      <>
      <label className="socialMedia">follow us 👍  </label>
      <div className="socialMedia" id="socialHandle">
            <a href="/about" class="fa fa-facebook"></a>
            <a href="/about" class="fa fa-twitter"></a>
            <a href="/about" class="fa fa-google"></a>
            <a href="/about" class="fa fa-linkedin"></a>
            <a href="/about" class="fa fa-youtube"></a>
            <a href="/about" class="fa fa-instagram"></a>
        </div>
        <div class="card-footer" style={{background:"black"}}>
        
            <div className="quickLINK">
                    <p>QUICK LINK
                    </p>
                    <pre><Link href="/">Posts</Link>  <Link href="/ask">Ask</Link>  JEE  NEET  <Link href="/class10">Class10</Link>  Class11  Class 12  <Link href="/advancedMaths">Advanced Maths</Link></pre>
            </div>
                <div className="copyRight">
                <p >&copy; igni-us.vercel.app | Designed by HJB@1086
                <Link href="/login"><span className="AdminBtn">Admin</span></Link>
                </p>
                </div>
                
        </div>
   </>
    
    )

}

export default Footer;




