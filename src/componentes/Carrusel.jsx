import React from "react";
import { Link } from "react-router-dom";

export default function Carrusel(props) {
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
                <p>Nombre: {item.nombre}</p>
                <p>Inicial el: {item.fechaInicio}</p>
                <p>Termina el: {item.fechaFin}</p>
                <Link to={`/subastas/${item.nombre}/info`}>
                  <button type="button">Consultar</button>
                </Link>
                <button type="button" onClick={() => props.inscribirUsuario(item)}>Inscribirme</button>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="next-button">
          &gt;
        </button>
      </div>
    );


}