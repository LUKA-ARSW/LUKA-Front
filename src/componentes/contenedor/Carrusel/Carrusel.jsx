/* eslint-disable no-extra-semi */
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

import "./Carrusel.css";


function Carrusel({ children: items }) {

    const [currentElement, setCurrentElement] = useState(null);
    const [currentPosition, setCurrentPosition] = useState(0);

    const handleNext = () => {
        const nextPosition = currentPosition + 1;
        setCurrentPosition(nextPosition < items.length ? nextPosition : 0);
    };

    const handlePrev = () => {
        const prevPosition = currentPosition - 1;
        setCurrentPosition(prevPosition >= 0 ? prevPosition : items.length - 1);
    };

    useEffect(() => {
        setCurrentElement(items[currentPosition]);
    }, [items, currentPosition]);

    return (
        <div className="container">
            <div className="content">
                <button onClick={handlePrev}>{"<"}</button>
                {currentElement}
                <button onClick={handleNext}>{">"}</button>
            </div>
        </div>
    );

};

Carrusel.propTypes = {
    children: PropTypes.array.isRequired
};

export default Carrusel;