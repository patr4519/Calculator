import React from "react";

export const Inputs = ({ setInputedArr, calculate, allClear, del }) => {

    return (
        <div className="inputs">
            <div className="row1">
                <div className="toggleOnOff">
                    <button className="button_calc onOff grey">On/Off</button>
                </div>
                <button className="button_calc grey" onClick={allClear}>AC</button>
                <button className="button_calc grey" onClick={del}>Del</button>
                <button className="button_calc orange" onClick={() => setInputedArr((prev) => [...prev, '/'])}>/</button>
            </div>
            <div className="row2">
                <button className="button_calc grey" onClick={() => setInputedArr((prev) => [...prev, '7'])}>7</button>
                <button className="button_calc grey" onClick={() => setInputedArr((prev) => [...prev, '8'])}>8</button>
                <button className="button_calc grey" onClick={() => setInputedArr((prev) => [...prev, '9'])}>9</button>
                <button className="button_calc orange" onClick={() => setInputedArr((prev) => [...prev, '*'])}>*</button>
            </div>
            <div className="row3">
                <button className="button_calc grey" onClick={() => setInputedArr((prev) => [...prev, '4'])}>4</button>
                <button className="button_calc grey" onClick={() => setInputedArr((prev) => [...prev, '5'])}>5</button>
                <button className="button_calc grey" onClick={() => setInputedArr((prev) => [...prev, '6'])}>6</button>
                <button className="button_calc orange" onClick={() => setInputedArr((prev) => [...prev, '-'])}>-</button>
            </div>
            <div className="row4">
                <button className="button_calc grey" onClick={() => setInputedArr((prev) => [...prev, '1'])}>1</button>
                <button className="button_calc grey" onClick={() => setInputedArr((prev) => [...prev, '2'])}>2</button>
                <button className="button_calc grey" onClick={() => setInputedArr((prev) => [...prev, '3'])}>3</button>
                <button className="button_calc orange" onClick={() => setInputedArr((prev) => [...prev, '+'])}>+</button>
            </div>
            <div className="row5">
                <button className="button_calc zero grey" onClick={() => setInputedArr((prev) => [...prev, '0'])}>0</button>
                <button className="button_calc grey" onClick={() => setInputedArr((prev) => [...prev, '.'])}>.</button>
                <button className="button_calc orange" onClick={calculate}>=</button>
            </div>
        </div>
    );
}