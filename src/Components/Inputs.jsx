import React from "react";

export const Inputs = ({ setInputedArr, calculate, allClear }) => {

    return (
        <div className="inputs">
            <div className="row1">
                <button className="button_calc" onClick={allClear}>AC</button>
                <button className="button_calc">Del</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '%'])}>%</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '/'])}>/</button>
            </div>
            <div className="row2">
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '7'])}>7</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '8'])}>8</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '9'])}>9</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '*'])}>*</button>
            </div>
            <div className="row3">
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '4'])}>4</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '5'])}>5</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '6'])}>6</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '-'])}>-</button>
            </div>
            <div className="row4">
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '1'])}>1</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '2'])}>2</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '3'])}>3</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '+'])}>+</button>
            </div>
            <div className="row5">
                <button className="button_calc zero" onClick={() => setInputedArr((prev) => [...prev, '0'])}>0</button>
                <button className="button_calc" onClick={() => setInputedArr((prev) => [...prev, '.'])}>.</button>
                <button className="button_calc" onClick={calculate}>=</button>
            </div>
        </div>
    );
}