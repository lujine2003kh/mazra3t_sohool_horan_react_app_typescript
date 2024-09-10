import React from 'react';
import '../style/gallery.css';
import bedroom1 from '../media/bedroom1.jpg';
const InsideArea: React.FC = () => {
  return (
    <div>
      <section id="image-slider">
        <div id="demotext">Bedrooms,Living room,Kitchen</div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
          </div>
          <div className="carousel-inner" style={{ width: '100%', height: '100%' }}>
            <div className="carousel-item active">
              <img
                src={"bedroom1"}
                className="d-block w-100 imgcl"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="../media/bedroom2.jpg"
                className="d-block w-100 imgcl"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./media/bedroom3.jpg"
                className="d-block w-100 imgcl"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./media/living_room.jpg"
                className="d-block w-100 imgcl"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./media/kitchen.jpg"
                className="d-block w-100 imgcl"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./media/living_room2.jpg"
                className="d-block w-100 imgcl"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="./media/living_room3.jpg"
                className="d-block w-100 imgcl"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default InsideArea;