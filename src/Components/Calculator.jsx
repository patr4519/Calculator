import React from "react";
import { Results } from "./Results";
import { Inputs } from "./Inputs";
import { Plug } from "./Plug";

export const Calculator = () => {
    const [currentValue, setCurrentValue] = React.useState(0);
    const [inputedArr, setInputedArr] = React.useState([]);
    const [enabled, setEnabled] = React.useState(false);

    const calculate = () => {
        let stringExp = inputedArr.join('');

        if (stringExp.includes('.')) {
            setCurrentValue((eval(stringExp)).toFixed(2));
        } else {
            setCurrentValue(eval(stringExp))
        }
    }

    const allClear = () => {
        setCurrentValue(0);
        setInputedArr([]);
    }

    const del = () => {
        setInputedArr((prev) => prev.slice(0, inputedArr.length - 1))
    }

    const toggleOnOff = () => {
        setEnabled(!enabled);
        allClear();
    }

    const handleKey = (e) => {
        switch (e.key) {
            case '0':
                setInputedArr((prev) => [...prev, '0']);
                break;
            case '1':
                setInputedArr((prev) => [...prev, '1']);
                break;
            case '2':
                setInputedArr((prev) => [...prev, '2']);
                break;
            case '3':
                setInputedArr((prev) => [...prev, '3']);
                break;
            case '4':
                setInputedArr((prev) => [...prev, '4']);
                break;
            case '5':
                setInputedArr((prev) => [...prev, '5']);
                break;
            case '6':
                setInputedArr((prev) => [...prev, '6']);
                break;
            case '7':
                setInputedArr((prev) => [...prev, '7']);
                break;
            case '8':
                setInputedArr((prev) => [...prev, '8']);
                break;
            case '9':
                setInputedArr((prev) => [...prev, '9']);
                break;
            case '+':
                setInputedArr((prev) => [...prev, '+']);
                break;
            case '-':
                setInputedArr((prev) => [...prev, '-']);
                break;
            case '*':
                setInputedArr((prev) => [...prev, '*']);
                break;
            case '/':
                setInputedArr((prev) => [...prev, '/']);
                break;
            case '.':
                setInputedArr((prev) => [...prev, '.']);
                break;
            case 'Enter':
                e.preventDefault()
                calculate();
                break;
            case 'Backspace':
                del();
                break;
            case 'Delete':
                allClear();
                break;
            default: 
                break;
        }
    }

    return (
        <div className="calculator" onKeyDown={handleKey}>
            {
                enabled ? <Results
                currentValue={currentValue}
                inputedValue={inputedArr} /> : <Plug />
            }

            <Inputs
                setInputedArr={setInputedArr}
                calculate={calculate}
                allClear={allClear}
                del={del}
                toggleOnOff={toggleOnOff} />
        </div>
    );
}