import React from 'react';
import Header from './Header';
import Content from './Content';
import Image from './Image';
import GoodsGallery from './GoodsGallery';
import './App.css';

function App() {
    return (
        <React.Fragment>
          <Header />
          <Content />
          <Image />
          <GoodsGallery />
        </React.Fragment>
    );
}

export default App;
