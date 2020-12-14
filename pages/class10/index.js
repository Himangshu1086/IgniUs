import Link from 'next/link'

const ADVMATHS =()=>{
    

    const para = 'Get the notes written by the students and also previous years questions asked in the semesters.'
    const subjectsA = ['সমাজ বিজ্ঞান ' , 'গণিত' , 'বিজ্ঞান']
    const subjectsE = ['SOCIAL SCIENCE' , 'MATHEMATICS' , 'SCIENCE']


    const  subjectListAssamese = subjectsA.map(subject=>{
        return(
            <>
                <Link href ={`/class10/${subject}`} >   
                <div className="branch-card">
                    <div className="branch-photo-and-name">
                        <p>{subject}</p>
                    </div>
                    <div className="branch-card-description">
                        <p>
                            {para}
                        </p>
                        <button>Explore<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                    </div>
                </div>
                </Link>
            </>
        )
    })


    const  subjectListEnglish = subjectsE.map(subject=>{
        return(
            <>
            <Link href ={`/class10/${subject}`} >   
                <div className="branch-card">
                    <div className="branch-photo-and-name">
                        <p>{subject}</p>
                    </div>
                    <div className="branch-card-description">
                        <p>
                            {para}
                        </p>
                        <button>Explore<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                    </div>
                </div>
            </Link>
            </>
        )
    })



    return(

         
        <div   style={{ backgroundImage:`url(https://images.unsplash.com/photo-1500402448245-d49c5229c564?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)` , backgroundSize:"cover" ,paddingTop:"200px", minHeight:"100vh"}}>
        <div style={{display:"flex" , flexWrap:"wrap"}}>    
            <Link href ={`/class10/ASSAMESE`} >   
                <div className="branch-card">
                    <div className="branch-photo-and-name">
                        <p>অসমীয়া</p>
                    </div>
                    <div className="branch-card-description">
                        <p>
                            {para}
                        </p>
                        <button>Explore<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                    </div>
                </div>
            </Link>

            <Link href ={`/class10/ENGLISH`} >   
            <div className="branch-card">
                <div className="branch-photo-and-name">
                    <p>ENGLISH</p>
                </div>
                <div className="branch-card-description">
                    <p>
                        {para}
                    </p>
                    <button>Explore<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                </div>
            </div>
            </Link>
        </div>

            <p style={{textAlign:"center",color:"#ff8080",boxShadow:"0px 0px 14px black", margin:"60px 50px" ,padding:"10px",background:"#ffe6e6",fontWeight:"bolder",fontSize:"30px"}}>ASSAMESE MEDIUM<i class="fa fa-hand-o-down" aria-hidden="true"></i></p>
            <div style={{display:"flex" , flexWrap:"wrap"}}>
                {subjectListAssamese}
            </div>

            
            <p style={{textAlign:"center",color:"#ff8080",boxShadow:"0px 0px 14px black", margin:"60px 50px" ,padding:"10px",background:"#ffe6e6",fontWeight:"bolder",fontSize:"30px"}}>ENGLISH MEDIUM<i class="fa fa-hand-o-down" aria-hidden="true"></i></p>
            <div style={{display:"flex" , flexWrap:"wrap"}}>
                {subjectListEnglish}
            </div>


        </div>
    )
}

export default ADVMATHS;





