import Link from 'next/link'

const About =()=>{

    return(
        <div className="bodu" style={{minHeight:"100vh"}}>
        <div className="containerforabout ">
            <h1 >ABOUT US  </h1>
            <Link href="/"><img className="photoOfMe" src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"/></Link>
            <h5><br/> NATIONAL INSTITUTE OF TECHNOLOGY , KARNATAKA , SURATHKAL<br/></h5>
        </div>
        

        </div >
    )
}

export default About;
