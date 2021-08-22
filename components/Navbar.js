import Link from 'next/link'
import {parseCookies} from 'nookies'
import baseUrl from '../HELPERS/baseUrl'
import {useRouter} from 'next/router'
import cookie from 'js-cookie'
import { useEffect , useState } from 'react'

export default function Navbar({adminUser}){

  const [userVerified , setUserVerified] = useState();

  useEffect(async()=>{

    const res = await fetch(`${baseUrl}/api/GetUser`);
    const adminUser = await res.json()
    setUserVerified(adminUser);
  },[])


    const router = useRouter(); 
    let admin = false;
    if(userVerified){
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


<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white mr-auto ">
  <a className="navbar-brand ml-2" style={{fontSize:"25px" ,fontFamily:"cursive" , letterSpacing:"8px" , color:"#9bbbd3"}} href="/">IgniUs</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" ></span>
  </button>
  <div className="collapse navbar-collapse  " id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
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
                        window.location.reload();
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







