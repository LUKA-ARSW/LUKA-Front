import { PropTypes } from 'prop-types';
import { useState, useEffect, useMemo } from 'react';

import { ReactComponent as LeftArrow } from '@assets/icon/left-arrow.svg';
import { ReactComponent as RightArrow } from '@assets/icon/right-arrow.svg';
import { ReactComponent as FirstPageArrow } from '@assets/icon/arrow-narrow-left-alignment.svg';
import { ReactComponent as LastPageArrow } from '@assets/icon/arrow-narrow-right-alignment.svg';


function Paginador({ children: totalItems, itemsPerPage }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([]);
    const pageItemsLimit = useMemo(() => Math.ceil(totalItems.length / itemsPerPage), [totalItems, itemsPerPage]);

    if (itemsPerPage < 1 || totalItems == null) {
        throw new Error("Paginador: itemsPerPage debe ser mayor que 0 y totalItems no debe estar vacío ni ser nulo");
    }

    const prevPage = () => {
        if (currentPage > 1) { setCurrentPage(currentPage - 1); }
    };

    const nextPage = () => {
        if (currentPage < pageItemsLimit) { setCurrentPage(currentPage + 1); }
    };

    const goToPage = (page) => {
        if (page > 0 && page <= pageItemsLimit) {
            setCurrentPage(page);
        }
    }

    const goToFirstPage = () => {
        goToPage(1);
    }

    const goToLastPage = () => {
        goToPage(pageItemsLimit);
    }

    useEffect(() => {
        const currentItems = totalItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        setItems(currentItems);
    }, [totalItems, currentPage, itemsPerPage]);



    return (
        <div className="container">
            <div className="content">
                {items}
            </div>
            <div className="control-panel">
                <button onClick={goToFirstPage}>
                    <FirstPageArrow width={25} height={20}/>
                </button>
                <button onClick={prevPage}>
                    <LeftArrow width={25} height={20}/>
                </button>
                <input type="number" value={currentPage} onChange={({ target }) => goToPage(target.value)} max={pageItemsLimit} min={1}/>
                <button onClick={nextPage}>
                    <RightArrow width={25} height={20}/>
                </button>
                <button onClick={goToLastPage}>
                    <LastPageArrow width={25} height={20}/>
                </button>
            </div>
        </div>
    );
}


Paginador.propTypes = {
    children: PropTypes.array.isRequired, 
    itemsPerPage: PropTypes.number.isRequired
};

export default Paginador;