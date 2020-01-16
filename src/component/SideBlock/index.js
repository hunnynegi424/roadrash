import React, { useState, useEffect } from 'react';
import './index.css';

function SideBlock() {

    const [offSet, setOffSet] = useState(0)
    useEffect(()=>{
        setInterval(() => {
            setOffSet(offSet => offSet < 710 ? (offSet = offSet + 10): offSet = 10)
        }, 20);
    }, [])

    
    return (
        <>
        <div className="rect-box-left" style={{left: 10, top: offSet}}>
        </div>
        <div className="rect-box-right" style={{right: 10, top: offSet}}>
        </div>
        </>
    )
};

export default SideBlock;
