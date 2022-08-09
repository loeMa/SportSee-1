import React from 'react';
import '../styles/components/card.css';
import PropTypes from 'prop-types';

const Card = ({data, shortName, title, img, color}) => {

    return (
        <div className='card'>
            <div style={{backgroundColor: color}} className="card__logo" >
                <img src={img} alt={title} />
            </div>
            
            <div className='card__text'>
                <h2>{data.toLocaleString('en-US')}{shortName}</h2>
                <p>{title}</p>
            </div>
            
        </div>
    );
};

Card.protoTypes = {
    data: PropTypes.number,
    shortName: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    color: PropTypes.string

}

export default Card;