import Head from 'next/head'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

const layout = ({children})=>{

        return(
        <>
        <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="../static/Navbar.css"/>
        <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css?family=Allerta Stencil' rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css?family=Amita' rel='stylesheet'></link>
        </Head>
        <NavBar/>
        {children}
        <Footer/>
    
       
        </>

        )

}

export default layout;