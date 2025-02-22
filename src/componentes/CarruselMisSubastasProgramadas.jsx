import React from "react";
import { Link } from "react-router-dom";

export default function CarruselMisSubastasProgramadas(props) {
    const items = props.items;

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % items.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((currentSlide - 1 + items.length) % items.length);
    };

    return(
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

                    <button type="button">Modificar</button>
                    <Link to={`/subastas/${item.nombre}/info`}>
                        <button type="button">Consultar</button>
                    </Link>
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg>
                    </button>
                </div>
            ))}
            </div>
            <button onClick={nextSlide} className="next-button">
            &gt;
            </button>
        </div>

   


    );
}