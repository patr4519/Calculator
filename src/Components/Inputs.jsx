import React from "react";

export const Inputs = () => {
    return (
        <div className="inputs">
            <div className="row1">
                <button className="button_calc">AC</button>
                <button className="button_calc">Del</button>
                <button className="button_calc">%</button>
                <button className="button_calc">/</button>
            </div>
            <div className="row2">
                <button className="button_calc">7</button>
                <button className="button_calc">8</button>
                <button className="button_calc">9</button>
                <button className="button_calc">*</button>
            </div>
            <div className="row3">
                <button className="button_calc">4</button>
                <button className="button_calc">5</button>
                <button className="button_calc">6</button>
                <button className="button_calc">-</button>
            </div>
            <div className="row4">
                <button className="button_calc">1</button>
                <button className="button_calc">2</button>
                <button className="button_calc">3</button>
                <button className="button_calc">+</button>
            </div>
            <div className="row5">
                <button className="button_calc zero">0</button>
                <button className="button_calc">.</button>
                <button className="button_calc">=</button>
            </div>
        </div>
    );
}