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


    const isActive =(route)=>{

        if(route==router.pathname){
            return "active"
        }
        else "";
    }

    return(
        <>
        <div className="box-for-header" >

            <nav className="NAVBAR-division" >
                <Link href="/"><div className="logo" >IgniUs</div></Link>
                <div className="item-of-navbar-visible-to-all ">
                    <Link href="/ask" ><div id={isActive("/ask")} >Ask</div></Link>
                    <Link  href="/about" ><div id={isActive("/about")} >AboutUs</div></Link>
                </div>
            </nav>

            <nav className="NAVBAR-division-1" >
            {admin ? 

                    <>
                        <Link  href="/questionAsked"><div className="quick-link" id={isActive("/questionAsked")} >AskedQuestion</div></Link>
                        <Link  href="/ADMIN"><div  className="quick-link " id={isActive("/createPost")} >ADMIN</div></Link>
                        <Link href="/login"><div className="quick-link"id={isActive("/login")} onClick={()=>{
                                    cookie.remove('token')
                                    router.push("/login")
                        }} >Logout</div></Link>
                    </>
                    :
                    <>  
                    </>
            }  
            </nav>
            <div className="quick-link-display" style={{display:"flex"}}>
            <nav className="NAVBAR-division-2" >
                    <Link  href="/nitk"><div className="quick-link " id={isActive("/nitk")} >NITK</div></Link>
                    <Link  href="/jee"><div className="quick-link " id={isActive("/quickLink/jee")} >JEE</div></Link>
                    <Link  href="/neet"><div className="quick-link " id={isActive("/quickLink/neet")} >NEET</div></Link>
                    <Link  href="/advancedMaths"><div className="quick-link " id={isActive("/advancedMaths")} >AdvancedMaths</div></Link>
                    <Link  href="/Class9"><div className="quick-link " id={isActive("/quickLink/Class9")} >Class9</div></Link>
                    <Link  href="/Class10"><div className="quick-link " id={isActive("/quickLink/Class10")} >Class10</div></Link>
                    <Link  href="/Class11"><div className="quick-link " id={isActive("/quickLink/Class11")} >Class11</div></Link>
                    <Link  href="/Class12"><div className="quick-link " id={isActive("/quickLink/Class12")} >Class12</div></Link>
                            
            </nav>
            </div>
        </div>
        </>
    )
}

export default Navbar;



/*

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


*/