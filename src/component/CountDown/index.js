import React from 'react';
import './index.css';

export default class CountDown extends React.Component {

    state={
        counter: 0,
        showStop: false,
    }

    incrementCounter = () => {
        this.timeout = setInterval(()=>{
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
        }, 1000);
    }

    startCounter = () => {
        this.setState(prevState => ({
            showStop: !prevState.showStop,
        }))
        this.incrementCounter();
    }

    stopCounter = () => {
        clearInterval(this.timeout);
        this.setState(prevState => ({
            showStop: !prevState.showStop,
        }))
    }

    resetCounter = () => {
        this.setState({counter: 0})
    }


    render() {
        const {counter, showStop} = this.state;
        return (
            <div className="timer-container">
                <div className="count-down-container">
                    {Math.floor(counter/60) < 10 && '0'}{Math.floor(counter/60)} : {counter%60 < 10 && '0'}{counter%60}
                </div>
                <button className="start-stop-btn" onClick={this.resetCounter}>Reset</button>
                {showStop ?
                    (<button className="start-stop-btn" onClick={this.stopCounter}>Stop</button>)
                    :
                    (<button className="start-stop-btn" onClick={this.startCounter}>Start</button>)
                }
                
            </div>
        )
    }
};
