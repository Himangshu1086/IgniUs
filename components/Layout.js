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
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../static/Navbar.css"/>
        <link rel="stylesheet" href="../static/navbar.css"/>
        <link rel="stylesheet" href="../static/nitk.css"/>
        <link href='https://fonts.googleapis.com/css?family=Adamina' rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css?family=Allerta Stencil' rel='stylesheet'></link>
        <link href='https://fonts.googleapis.com/css?family=Amita' rel='stylesheet'></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
        

        </Head>
        <main>
        <NavBar/>
        {children}
                <Footer/>



                </main>
        
        
        
        
        </>



        )

}

export default layout;