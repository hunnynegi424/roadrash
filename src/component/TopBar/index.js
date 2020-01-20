import React, { useState, useEffect } from 'react';
import './index.css';
import CountDown from '../CountDown';

function TopBar() {
    
    const [colorSwitch, setColorSwitch] = useState(true);
    const [levelList, setLevelList] = useState(false);

    useEffect(() => {
        setInterval(()=>{
            setColorSwitch(prevState => !prevState)
        }, 10000)
    }, []);

    const levelDropdown = () => {
        setLevelList(prevState => !prevState)
    }

    return (
        <div className="bar-container" style={{backgroundColor: colorSwitch ? 'rgb(134, 200, 100)' : 'rgb(170, 143, 86)'}}>
            <h4>
                Road Rash
            </h4>
            <div className="counter">
                <CountDown/>
            </div>
            <div className="input-container">
                <label>Level:</label>
                <button type="text" className="level-input" onClick={levelDropdown}>Level</button>
                {levelList && <div>
                <ul className="level-list">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                </ul>
                </div>}
            </div>
        </div>
    )
}

export default TopBar;
