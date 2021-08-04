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


<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white mr-auto ">
  <a class="navbar-brand ml-2" style={{fontSize:"25px" ,fontFamily:"cursive" , letterSpacing:"8px" , color:"#9bbbd3"}} href="/">IgniUs</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" ></span>
  </button>
  <div class="collapse navbar-collapse  " id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
      <Link  href="/"><div className="quick-link " id={isActive("/")} >Home</div></Link>
      </li>
      <li class="nav-item">
      <Link  href="/advancedMaths"><div className="quick-link " id={isActive("/advancedMaths")} >AdvancedMaths</div></Link>
      </li>
      <li class="nav-item">
      <Link  href="/class10"><div className="quick-link " id={isActive("/class10")} >Class10</div></Link>
      </li>
      <li class="nav-item">
      <Link  href="/about"><div className="quick-link " id={isActive("/about")} >About</div></Link>
      </li>
      <li class="nav-item">
      <Link  href="/ask"><div className="quick-link " id={isActive("/ask")} >Ask</div></Link>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
            {admin ? 

        <>
            <li><Link  href="/questionAsked"><div className="quick-link" id={isActive("/questionAsked")} >AskedQuestion</div></Link></li>
            <li><Link  href="/ADMIN"><div  className="quick-link " id={isActive("/ADMIN")} >ADMIN</div></Link></li>
            <li><Link href="/login"><div className="quick-link"id={isActive("/login")} onClick={()=>{
                        cookie.remove('token')
                        router.push("/login")
            }} >Logout</div></Link></li>
        </>
        :
        <>  
        </>
        }
    </ul>
  </div>
</nav>
    </>
    )
}

export default Navbar;



