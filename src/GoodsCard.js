import React from 'react';
import './GoodsCard.css';

function GoodsCard(props) {
    return (
        <div>
            <img src={props.photo} alt="Goods Image"/>
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
        </div>
    );
}

export default GoodsCard;
