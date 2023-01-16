import React from "react";

export const Results = ({ currentValue, inputedValue }) => {
    return (
        <div className="results">
            <div className="inputedValue">{inputedValue}</div>
            <div className="currentValue">{currentValue}</div>
        </div>
    );
}