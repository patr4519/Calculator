import React from "react";
import { Results } from "./Results";
import { Inputs } from "./Inputs";

export const Calculator = () => {
    const [currentValue, setCurrentValue] = React.useState(0);
    const [inputedArr, setInputedArr] = React.useState([]);

    const calculate = () => {
        let stringExp = inputedArr.join('');

        if (stringExp.includes('.')) {
            console.log('this variant')
        }

        setCurrentValue(eval(stringExp))
    }

    const allClear = () => {
        setCurrentValue(0);
        setInputedArr([]);
    }

    const del = () => {
        setInputedArr((prev) => prev.slice(0, inputedArr.length - 1))
    }

    return (
        <div className="calculator">
            <Results
                currentValue={currentValue}
                inputedValue={inputedArr} />

            <Inputs
                setInputedArr={setInputedArr}
                calculate={calculate}
                allClear={allClear}
                del={del} />
        </div>
    );
}