import Link from 'next/link'

const About =()=>{

    return(
        <div>
        <div className="containerforabout ">
            <h1 >ABOUT US  </h1>
            <img className="photoOfMe" src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"/>
            <h2>HIMANGSHU BAISHYA</h2>
            <h5>B TECH 2ND YEAR<br/> NATIONAL INSTITUTE OF TECHNOLOGY , KARNATAKA , SURATHKAL<br/> 2019-2023</h5>
            <label>MERN stack</label>
        </div>
        <div style={{marginTop:"12px"}}></div>

        </div>
    )
}

export default About;
