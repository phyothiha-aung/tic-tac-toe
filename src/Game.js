import React, { useState } from 'react';
import Board from './Board';
import {calculateWinner} from './helpers'
import './Game.css';

const Game = () => {

  const [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  })

  const  handleClick = (i) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext
    });
  }

  const jumpTo = (step) => {
    setState({
      ...state,
      stepNumber: step,
      xIsNext: !state.xIsNext
    });
  }

  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);

  let status;
  if (winner) {
    status = winner==='Draw'
      ? <div style={{textAlign:"center"}}> 
          Draw
        </div>
      : <div style={{textAlign:"center"}}>Winner: 
          <span className={winner}> {winner}</span>
        </div>
  } else {
    status = <div style={{textAlign:"center"}}>Next player: 
                {
                  state.xIsNext ?
                    <span className="X"> X</span> 
                    : <span className="O"> O</span>
                }
              </div>
  }

  return (
    <div className="t-game">
      <div className="t-game-board">
        {status}
        <br/>
        <Board
          squares={current.squares}
          handleClick={i => handleClick(i)}
          jumpTo={(move)=>jumpTo(move)}
          state={state}
          setState={setState}
        />
      </div>
    </div>
  );
}

export default Game;
