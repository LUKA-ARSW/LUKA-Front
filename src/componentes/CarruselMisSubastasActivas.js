import React from "react";


export default function CarruselMisSubastasActivas(props) {
    const items = props.items;

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % items.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((currentSlide - 1 + items.length) % items.length);
    };
  
    return (
      <div className="carousel-container">
        <button onClick={prevSlide} className="prev-button">
          &lt;
        </button>
        <div className="carousel-slide">
          {items.filter((item, index) => index === currentSlide).map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            >
                <p>Nombre: {item.Nombre}</p>
                <p>Inicial el: {item.FechaInicio}</p>
                <p>Termina el: {item.FechaFin}</p>

                <button type="button">Consultar</button>
                <button type="button">Ingresar</button>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="next-button">
          &gt;
        </button>
      </div>
    );


}