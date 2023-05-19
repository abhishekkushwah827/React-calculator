import React, { useState } from 'react'
import "./Calculator.css";
import Keypad from "../Keypad/Keypad";


const Calculator = () => {
    const [equation, setEquation] = useState("");
    const [output, setOutput] = useState(null);
    const [history, setHistory] = useState([]);
    const [showhistory, setShowhistory] = useState(false);

    const handleSquareClick = (keyPressed) => {
        const pressedBtn = keyPressed;
        const lastPressedBtn = equation.at(-1);

        if (['+', '-', '*', '/', '%'].indexOf(lastPressedBtn) !== -1 &&
            ['+', '-', '*', '/', '%'].indexOf(pressedBtn) !== -1) {
            let newEquation = equation.slice(0, -1);
            newEquation += pressedBtn;
            setEquation(newEquation);
            return;
        }

        switch (pressedBtn) {
            case "H": showHistoryBtnClick();
                break;
            case "C": clearAll();
                break;
            case "=": calculateResult(lastPressedBtn);
                break;
            case "x": clearInput();
                break;
            default:
                let newEquation = output ? "" : equation;
                newEquation += pressedBtn;
                setOutput(null);
                setEquation(newEquation);
                break;
        }
    }

    const showHistoryBtnClick = () => {
        setShowhistory(!showhistory);
    }
    const clearAll = () => {
        setEquation("");
        setOutput(null);
    }
    const clearInput = () => {
        let newEquation = equation.trim();
        newEquation = newEquation.slice(0, newEquation.length - 1);
        setEquation(newEquation)
    }
    const calculateResult = (lastPressedBtn) => {
        try {
            let Result = 0;
            if (['+', '-', '*', '/'].indexOf(lastPressedBtn) !== -1) {
                Result = eval(equation.slice(0, -1));
            }
            else if (lastPressedBtn === "%") {
                Result = eval(equation.slice(0, -1)) * 100;
            }
            else {
                Result = eval(equation);
            }

            setOutput(Result)
            setHistory([{ equation, output: Result }, ...history]);
        } catch (error) {
            setEquation("");
            alert('Invalid Mathematical Expression');
        }
    }

    return (
        <div className='calculator'>
            <div className={`screen ${showhistory && "history"}`}>
                {showhistory ?
                    history.map((el, i) => (
                        <div key={i}>
                            <p>{el.equation}={el.output}</p>
                        </div>
                    ))
                    :
                    <>
                        <div>{equation || 0}</div>
                        {
                            output !== null && <div>={output}</div>
                        }
                    </>
                }
            </div>
            <Keypad onSquareClick={handleSquareClick} />
        </div>
    )
}

export default Calculator;