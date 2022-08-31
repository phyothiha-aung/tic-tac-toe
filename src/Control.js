const Control = ({control, state, setState}) => {

  const initialState = { 
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  }

  const undo = () => {
    state.stepNumber>0? control(state.stepNumber-1): control(state.stepNumber)
  }

  const redo = () => {
    state.history.length-state.stepNumber===1? control(state.stepNumber): control(state.stepNumber+1)
  }

  return (
    <div className="t-board-row control">
      <button className="t-square t-arrow" onClick={undo}>&lt;</button>
      <button className="t-square t-restart" onClick={()=>setState(initialState)}>Restart</button>
      <button className="t-square t-arrow" onClick={redo}>&gt;</button>
    </div>
  )
}

export default Control