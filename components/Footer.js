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
                 CONTACT US<br/>
                 <Link href="/login"><a>LinkedIn</a></Link> 
                 <p>8638281835
                baishyahimangshu499@gmail.com</p>  
        </div>
        <div className="intro">
            <h4>QUICK LINK</h4>
                <Link href="/"><h6>Post</h6></Link>
                <h6>Ask</h6>
                <h6>JEE</h6>
                <h6>NEET</h6>
                <h6>CLASS 10</h6>
                <h6>Advanced Maths</h6>
                <h6>CLASS 11</h6>
                <h6>CLASS 12</h6>
            
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
            <p>&copy; IgniUs.com | Designed by HJB@1086
            <Link href="/login"><label className="AdminBtn">Admin</label></Link>
            </p>
            
        </div>
        
    
    </>
    )

}

export default Footer;