import 'nprogress/nprogress.css'
 import Layout from '../components/Layout'
import dynamic from 'next/dynamic'

 const TopProgressBar = dynamic(
    () => {
      return import("../components/TopProgressBar");
    },
    { ssr: false },
  );


        
function MyApp({Component , pageProps}){

    return (
        <>
        <TopProgressBar />
    <Layout> 
        
        <Component {...pageProps}/>
    
    </Layout>
    </>
    )
}

export default MyApp;