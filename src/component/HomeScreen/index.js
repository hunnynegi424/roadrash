import React from 'react';
import Game from '../../assets/game.png';

function HomeScreen() {

    const closeEvent = () => {
        window.open("about:blank", "_self");
        window.close();
    }

    return (
        <div>
            <h1>
                Road Rash
            </h1>
            <img src={Game} alt="game" style={{backgroundColor: 'rgba(0,0,0,0)', width: 200, height: 200}} />
            <h4 style={{color: '#f7ba54'}}>Menu</h4>
            <p style={{cursor: 'pointer'}}>Start</p>
            <p style={{cursor: 'pointer'}} onClick={closeEvent}>Exit</p>
        </div>
    )
}

export default HomeScreen;