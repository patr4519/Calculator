import React from "react";
import { Results } from "./Results";
import { Inputs } from "./Inputs";

export const Calculator = () => {
    const [currentValue, setCurrentValue] = React.useState(0);
    const [inputedValue, setInputedValue] = React.useState('');

    return (
        <div className="calculator">
            <Results
            currentValue={currentValue}
            inputedValue={inputedValue} />
            <Inputs />
        </div>
    );
}