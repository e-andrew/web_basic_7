import React from 'react';
import './Content.css';


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
    }

    randomColor() {
        let color = Math.floor(Math.random() * 16777215).toString(16);
        while (color.length < 6) {
            color = "0" + color;
        }
        return "#" + color; 
    }

    changeColor(e) {
        e.target.style.color = this.randomColor();
        e.target.style.backgroundColor = this.randomColor();
    }

    render() {
        return (
            <React.Fragment>
            <p>Дата народження: 16.03.2000. Місце народження: м.Київ</p>
            <p onClick={this.changeColor}>Школа: Спеціалізована школа І-ІІІ ступенів з поглибленим вивченням англійської мови № 15. Університет: Національний технічний університет України "Київський політехнічний інститут імені Ігоря Сікорського"</p>
            <p onClick={this.changeColor}>Мої хобі:</p>
            <ul>
                <li>Counter Strike: Global Offensive</li>
                <li>Anime</li>
                <li>Dungeons and Dragons</li>
            </ul>
            <p>Улюблені фільми:</p>
            <ol>
                <li>Shaun of the Dead</li>
                <li>Hot Fuzz</li>
                <li>The World's End</li>
            </ol>
            <p>Полтава — важливий культурний центр, великий транспортний вузол. Площа міста — 112,52 км.кв., адміністративно місто розділене на 3 райони: Шевченківський (колишній Жовтневий), Київський і Подільський (колишній Ленінський). Наявне населення — 279 593 осіб (01.01.2022).</p>
            </React.Fragment>
        );
    }


}

export default Content;
