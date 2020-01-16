import React, {useState, useEffect} from 'react';
import './index.css';

function PositionDemo() {

    const [x, setX] = useState(750);
    const [y, setY] = useState(700);

    const getMouseCoordinates = e => {
        setX(e.clientX+70);
        setY(e.clientY+70);
    }

    useEffect(() => {
        window.addEventListener('mousemove', getMouseCoordinates)
    });
    const leftX = x<1460 ? x-40 : 1420;
    const topY = y<700 ? y-40 : 650;

    return (
        <div className="mouse-box" style={{left: leftX, top: topY,}}>
            
        </div>
    )
}

export default PositionDemo;