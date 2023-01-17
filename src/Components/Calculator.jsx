import React from "react";
import { Results } from "./Results";
import { Inputs } from "./Inputs";

export const Calculator = () => {
    const [currentValue, setCurrentValue] = React.useState(0);
    const [inputedArr, setInputedArr] = React.useState([]);

    const calculate = () => {
        setCurrentValue(eval(inputedArr.join('')))
    }

    const allClear = () => {
        setCurrentValue(0);
        setInputedArr([]);
    }

    return (
        <div className="calculator">
            <Results
                currentValue={currentValue}
                inputedValue={inputedArr} />

            <Inputs
                setInputedArr={setInputedArr}
                calculate={calculate}
                allClear={allClear} />
        </div>
    );
}