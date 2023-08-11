import './App.css';
import { useState } from 'react';

function Square({value}) {

  return (
    <button
      className="square">
      {value}
    </button>
  );
}

export default function Board() {

  const [sqaures, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className='board-row'>
        <Square value = {sqaures[0]}/>
        <Square value = {sqaures[1]}/>
        <Square value = {sqaures[2]}/>
      </div>
      <div className='board-row'>
        <Square value = {sqaures[3]}/>
        <Square value = {sqaures[4]}/>
        <Square value = {sqaures[5]}/>
      </div>
      <div className='board-row'>
        <Square value = {sqaures[6]}/>
        <Square value = {sqaures[7]}/>
        <Square value = {sqaures[8]}/>
      </div>
    </>
  );
};
