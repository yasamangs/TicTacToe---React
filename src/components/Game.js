import React, { useState } from "react";
import { calcWinner } from "../helper";
import Board from "./Board";

function isBoardFilled(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      return false;
    };
  };
  return true;
};

  const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calcWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";


  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };



    let status;
    if (winner) {
      status = "Winner: " + winner;
    }
    else if (isBoardFilled(history[stepNumber])) {
      status = "It's a Tie!";
    } else {
      status = "Next player: " + xO;
}

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <h3>
          { status }
        </h3>
      </div>
    </>
  );
};

export default Game;

