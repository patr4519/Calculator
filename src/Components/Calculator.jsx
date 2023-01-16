import React from "react";
import { Results } from "./Results";
import { Inputs } from "./Inputs";

export const Calculator = () => {
    return (
        <div className="calculator">
            <Results />
            <Inputs />
        </div>
    );
}