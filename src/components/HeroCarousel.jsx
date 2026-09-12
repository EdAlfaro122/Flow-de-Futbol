import "./HeroCarousel.css"

function HeroCarousel() {
  return (
    <div
  id="heroCarousel"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="5000"
>

        <div className="carousel-indicators">
  <button
    type="button"
    data-bs-target="#heroCarousel"
    data-bs-slide-to="0"
    className="active"
    aria-current="true"
    aria-label="Slide 1"
  ></button>

  <button
    type="button"
    data-bs-target="#heroCarousel"
    data-bs-slide-to="1"
    aria-label="Slide 2"
  ></button>

  <button
    type="button"
    data-bs-target="#heroCarousel"
    data-bs-slide-to="2"
    aria-label="Slide 3"
  ></button>
</div>


      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src="/images/banner-1.jpg"
            className="d-block w-100 hero-image"
            alt="Camisa del Real Madrid"
          />
        </div>

        <div className="carousel-item">
          <img
            src="/images/banner-2.jpg"
            className="d-block w-100 hero-image"
            alt="Camisa del Barcelona"
          />
        </div>

        <div className="carousel-item">
          <img
            src="/images/banner-3.jpg"
            className="d-block w-100 hero-image"
            alt="Camisa de Argentina"
          />
        </div>

      </div>

    <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#heroCarousel"
  data-bs-slide="prev"
>
  <span className="carousel-control-prev-icon"></span>
  <span className="visually-hidden">Anterior</span>
</button>

<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#heroCarousel"
  data-bs-slide="next"
>
  <span className="carousel-control-next-icon"></span>
  <span className="visually-hidden">Siguiente</span>
</button>

    </div>

    

  );
}

export default HeroCarousel;