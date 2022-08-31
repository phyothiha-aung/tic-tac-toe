import Square from './Square';
import Control from './Control';

const Board = (props) => {

  const renderSquare = (i) => {
    return (
      <Square
        value={props.squares[i]}
        onClick={()=>props.handleClick(i)}
      />
    );
  }

  return (
    <>
      <div className="t-board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="t-board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="t-board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <br/>
      <Control control={(move)=>props.jumpTo(move)} state={props.state} setState={props.setState}/>
    </>
  );
}

export default Board;
