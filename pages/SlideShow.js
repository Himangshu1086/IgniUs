


export default function Slideshow() {
  
  
    return (
      <div  id="carouselExampleIndicators" class="carousel slide" style={{background:"black"}} data-ride="carousel">
  <ol class="carousel-indicators" >
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  
  <div class="carousel-inner slideshow" style={{opacity:"0.6"}} >
    <div class="carousel-item active">
      <img class=" w-100 " src="https://images.unsplash.com/photo-1542587227-8802646daa56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class=" w-100" src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class=" w-100 " src="https://images.unsplash.com/photo-1599249300675-c39f1dd2d6be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
     
    )
}