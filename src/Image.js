import React from 'react';
import './Image.css';

function Image() {
    function addPhoto(e) {
        let element = document.createElement("img");
        element.name = "image-name";
        element.src = "./town.jpg";
        element.alt = "Poltava Town";
        document.getElementById("photoholder-id").appendChild(element);
    }

    function deletePhoto(e) {
        let elements = document.getElementsByName("image-name");
        if (elements.length > 0) { document.getElementById("photoholder-id").removeChild(elements[0]); }
    }

    function increasePhoto(e) {
        document.getElementsByName("image-name").forEach(element => {
            element.height += 10;
            element.width += 10;
        });
    }

    function decreasePhoto(e) {
        document.getElementsByName("image-name").forEach(element => {
            element.height -= 10;
            element.width -= 10;
        });
    }

    return (
        <React.Fragment>
            <a href="https://uk.wikipedia.org/wiki/Полтава">
                <img src="./town.jpg" alt="Poltava Town" />
            </a>

            <div className="container">
                <button onClick={addPhoto}>Додати</button>
                <button onClick={deletePhoto}>Видалити</button>
                <button onClick={increasePhoto}>Збільшити</button>
                <button onClick={decreasePhoto}>Зменшити</button>
            </div>

            <div id="photoholder-id"></div>
        </React.Fragment>
    );
}

export default Image;
