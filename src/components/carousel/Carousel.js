import react from 'react'

const Carousel = () => {
    return (
        <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.hswstatic.com/gif/gettyimages-ec2879-002.jpg" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>slide1</h5>
        <p>slide1</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.hswstatic.com/gif/gettyimages-ec2879-002.jpg" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>slide2</h5>
        <p>slide2</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.hswstatic.com/gif/gettyimages-ec2879-002.jpg" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>slide3</h5>
        <p>slide3</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span classname="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>

        </div>
    )
}

export default Carousel