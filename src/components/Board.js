import React from "react";


const Square = (props) => {
  const style = props.value ? `squares ${props.value}` : `squares`;

  return (
    <button className={style} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;