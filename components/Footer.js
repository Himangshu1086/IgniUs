import Link from 'next/link'
import baseUrl from '../HELPERS/baseUrl'


const Footer =()=>{


    return(
      
        <div class="card-footer" style={{background:"black"}}>
            <div className="quickLINK">
                    <p>QUICK LINK
                    </p>
                    <pre><Link href="/">Posts</Link>  <Link href="/ask">Ask</Link>  JEE  NEET  Class10  Class11  Class 12  Advanced Maths</pre>
            </div>
                <div className="copyRight">
                <p >&copy; igni-us.vercel.app | Designed by HJB@1086
                <Link href="/login"><span className="AdminBtn">Admin</span></Link>
                </p>
                </div>
                
        </div>
   
    
    )

}

export default Footer;




