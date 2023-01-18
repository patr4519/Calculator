import React from "react";

export const Results = ({ currentValue, inputedValue }) => {
    let inpValStyle = '';
    let resultsStyle = '';

    if (inputedValue.length > 20) {
        inpValStyle = 'decrease2';
        resultsStyle = 'column';
    } else if (inputedValue.length > 10) {
        inpValStyle = 'decrease2';
    }

    return (
        <div className={`results ${resultsStyle ? resultsStyle : ''}`}>
            <div className={`inputedValue ${inpValStyle ? inpValStyle : ''}`}>{inputedValue}</div>
            <div className={`currentValue ${inpValStyle ? inpValStyle : ''}`}>{currentValue}</div>
        </div>
    );
}