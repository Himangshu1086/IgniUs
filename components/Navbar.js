import Link from 'next/link'
import {parseCookies} from 'nookies'
import {useRouter} from 'next/router'
import cookie from 'js-cookie'

const Navbar =()=>{

    const router = useRouter(); 

    const {token} = parseCookies();
    let admin = false;
    if(token){
        admin = true
    }
    else{
        admin = false
    }



    return(
        <>
<nav className="navbar navbar-expand-lg fixed-top  navbar-dark bg-dark " id="navBAr">
        <a className="navbar-brand " href="/">IgniUs</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"  id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">

            {admin ? 

            <>
                <Link  href="/questionAsked"><a className="nav-item nav-link" id="NAB" >AskedQuestion</a></Link>
                <Link  href="/createPost"><a className="nav-item nav-link" >CreatePost</a></Link>
                <Link href="/ask"><a className="nav-item nav-link" >Ask<span class="sr-only">(current)</span></a></Link>
                <Link href="/features"><a className="nav-item nav-link" >Features</a></Link>
                <Link  href="/about"><a className="nav-item nav-link">About Us</a></Link>
                <Link href="/login"><a className="nav-item nav-link" onClick={()=>{
                            cookie.remove('token')
                            router.push("/login")
                }} >Logout</a></Link>
            </>

            :
            <>
            <Link href="/ask"><a className="nav-item nav-link" >Ask<span class="sr-only">(current)</span></a></Link>
            <Link href="/features"><a className="nav-item nav-link" >Features</a></Link>
            <Link  href="/about"><a className="nav-item nav-link">About Us</a></Link>
            
                
            </>
            


            }
            
            
            </div>
            
        </div>
</nav>
        </>
    )
}

export default Navbar;
