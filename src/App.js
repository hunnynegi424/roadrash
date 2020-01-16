import React from 'react';
import './App.css';
import PositionDemo from './component/PositionDemo';
import SideBlock from './component/SideBlock';
// import HomeScreen from './component/HomeScreen/';
// import CountDown from './component/CountDown';

function App() {
  return (
    <div className="App">
      {/* <CountDown/> */}
      {/* <HomeScreen/> */}
      <span>
        <SideBlock/>
      </span>
      <span>
        <PositionDemo/>
      </span>
    </div>
  );
}

export default App;
