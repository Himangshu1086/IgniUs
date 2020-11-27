import Link from 'next/link'


const Footer =()=>{


    return(
        <>
    <div className="footer-container">
        <div className="intro0" >
            <h4>IgniUs</h4>
            <p>IgniUs is a website that gives the preparation stregies for competative exam.
                 It provide various educational post both for high school and undergraduates.
                 It is developed by HImangshu Baishya , currently studying undergraduate in NIT Karnataka , Surathkal</p>
                 <Link href="/login"><a className="nav-item nav-link" >LinkedIn</a></Link> 
                 <p>8638281835</p>
                <p>baishyahimangshu499@gmail.com</p>   
        </div>
        <div className="intro">
            <h4>QUICK LINK</h4>
            <ul>
                <Link href="/"><li>Post</li></Link>
                <li>Ask</li>
                <li>JEE</li>
                <li>NEET</li>
                <li>CLASS 10</li>
                <li>Advanced Maths</li>
                <li>CLASS 11</li>
                <li>CLASS 12</li>
            </ul>
        </div>
        <div className="intro">
            <h4>Follow Us</h4>
            <h6>Facebook</h6>
            <h6>Instagram</h6>
            <h6>Twitter</h6>
            <h6>Youtube</h6>
        </div>
        </div>
        <div className="copyRight">
            &copy; IgniUs.com | Designed by HJB@1086
            <Link href="/login"><label>Admin</label></Link>
        </div>
        
    
    </>
    )

}

export default Footer;