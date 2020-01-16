import React, { useState } from 'react';
import './index.css';

function CountDown() {
    const [counter, setCounter] = useState(0)
    const [showStop, setShowStop] = useState(false);

    const incrementCounter = () => {
        setInterval(()=>{
        setCounter(prevCounter => prevCounter+1)
        }, 1000);
    }

    const startCounter = () => {
        setShowStop(prevShowStop => !prevShowStop);
        incrementCounter();
    }

    const stopCounter = () => {
        setShowStop(prevShowStop => !prevShowStop);
    }

    const resetCounter = () => {
        setCounter(0);
    }


    return (
        <div className="timer-container">
            <div className="count-down-container">
                {Math.floor(counter/60) < 10 && '0'}{Math.floor(counter/60)} : {counter%60 < 10 && '0'}{counter%60}
            </div>
            <button onClick={resetCounter}>Reset</button>
            {showStop ?
                (<button onClick={stopCounter}>Stop</button>)
                :
                (<button onClick={startCounter}>Start</button>)
            }
            
        </div>
    )
}

export default CountDown;
