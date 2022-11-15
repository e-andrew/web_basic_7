import React from 'react';
import GoodsCard from './GoodsCard';
import './GoodsGallery.css';

function GoodsGallery() {
    return (
        <div className="gallery">
            <GoodsCard name="Apple" price="15" photo="./apple.jpg"/>
            <GoodsCard name="Banana" price="20" photo="./banana.png"/>
            <GoodsCard name="Orange" price="25" photo="./orange.jpg"/>
            <GoodsCard name="Grapes" price="30" photo="./grapes.jpg"/>
            <GoodsCard name="Coconut" price="35" photo="./coconut.jpg"/>
            <GoodsCard name="Cherry" price="40" photo="./cherry.jpg"/>
        </div>
    );
}

export default GoodsGallery;
