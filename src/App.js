import './App.css';
import { useState } from 'react';

function Square({value, onSquareClick}) {

  return (
    <button
      className="square"
      onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {

  const [sqaures, setSquares] = useState(Array(9).fill(null));

  const handleClick = () => {
    const nextSquares = sqaures.slice();
    nextSquares[0] = 'X';
    setSquares(nextSquares);
  };

  return (
    <>
      <div className='board-row'>
        <Square value = {sqaures[0]} onSquareClick={handleClick}/>
        <Square value = {sqaures[1]} onSquareClick={handleClick}/>
        <Square value = {sqaures[2]} onSquareClick={handleClick}/>
      </div>
      <div className='board-row'>
        <Square value = {sqaures[3]} onSquareClick={handleClick}/>
        <Square value = {sqaures[4]} onSquareClick={handleClick}/>
        <Square value = {sqaures[5]} onSquareClick={handleClick}/>
      </div>
      <div className='board-row'>
        <Square value = {sqaures[6]} onSquareClick={handleClick}/>
        <Square value = {sqaures[7]} onSquareClick={handleClick}/>
        <Square value = {sqaures[8]} onSquareClick={handleClick}/>
      </div>
    </>
  );
};
