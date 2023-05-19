import React from 'react';
import "./Keypad.css";
import Button from '../Button/Button'

const Keypad = ({ onSquareClick }) => {
    return (
        <div>
            <div className='row'>
                <Button value={"C"} isOperator={true} onSquareClick={onSquareClick} />
                <Button value={"x"} isOperator={true} onSquareClick={onSquareClick}>
                    <i className="fa-solid fa-delete-left"></i>
                </Button>
                <Button value={"%"} isOperator={true} onSquareClick={onSquareClick} />
                <Button value={"/"} isOperator={true} onSquareClick={onSquareClick} />
            </div>
            <div className='row'>
                <Button value={7} onSquareClick={onSquareClick} />
                <Button value={8} onSquareClick={onSquareClick} />
                <Button value={9} onSquareClick={onSquareClick} />
                <Button value={"*"} isOperator={true} onSquareClick={onSquareClick} />
            </div>
            <div className='row'>
                <Button value={4} onSquareClick={onSquareClick} />
                <Button value={5} onSquareClick={onSquareClick} />
                <Button value={6} onSquareClick={onSquareClick} />
                <Button value={"-"} isOperator={true} onSquareClick={onSquareClick} />
            </div>
            <div className='row'>
                <Button value={1} onSquareClick={onSquareClick} />
                <Button value={2} onSquareClick={onSquareClick} />
                <Button value={3} onSquareClick={onSquareClick} />
                <Button value={"+"} isOperator={true} onSquareClick={onSquareClick} />
            </div>
            <div className='row'>
                <Button value={"H"} isOperator={true} onSquareClick={onSquareClick} >
                    <i className="fa-solid fa-clock-rotate-left"></i>
                </Button>
                <Button value={0} onSquareClick={onSquareClick} />
                <Button value={"."} onSquareClick={onSquareClick} />
                <Button value={"="} isOperator={true} onSquareClick={onSquareClick} />
            </div>
        </div>
    )
}

export default Keypad