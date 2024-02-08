import './App.css'
import React, { useReducer } from'react'

const initialState = {input:"",}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      if ("+/*-".includes(state.input.slice(-1)) && "+/*-".includes(action.payload) ){ 
       return { ...state, input: state.input + action.payload }
      } else{
        return { ...state, input: state.input + action.payload }
      }
    case 'CLEAR':
      return initialState;
    case 'CALCULATE':
      return { ...state, input: eval(state.input).toString() }
    case 'DEL':
      return { ...state, input: state.input.slice(0, -1) }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (value) => {
    if (value === "=") {
      dispatch({ type: "CALCULATE" })
    } else if (value === 'AC') {
      dispatch({ type: "CLEAR" })
    } else if(value === 'DEL') {
      dispatch({ type: "DEL" })
    } else  {
      if (state.input === "" && ["+", "-", "*", "/"].includes(value)) {
        alert("An operator cannot be the first character!");
        return;
      }
      dispatch({ type: "ADD", payload: value })
    }
  }

  return (
    <>
      <h1>Calculator App</h1>
      <div className='calculator-container'>
        <input type="text" value={state.input} readOnly />
        <div className='calculator-buttons'>
          <button onClick={()=>handleClick(7)}>7</button>
          <button onClick={()=>handleClick(8)}>8</button>
          <button onClick={()=>handleClick(9)}>9</button>
          <button className='op' onClick={()=>handleClick("/")}>/</button>
          <button onClick={()=>handleClick(4)}>4</button>
          <button onClick={()=>handleClick(5)}>5</button>
          <button onClick={()=>handleClick(6)}>6</button>
          <button className='op' onClick={()=>handleClick("*")}>*</button>
          <button onClick={()=>handleClick(1)}>1</button>
          <button onClick={()=>handleClick(2)}>2</button>
          <button onClick={()=>handleClick(3)}>3</button>
          <button className='op' onClick={()=>handleClick("-")}>-</button>
          <button onClick={()=>handleClick(0)}>0</button>
          <button className='op' onClick={()=>handleClick(".")}>.</button>
          <button className='op' onClick={()=>handleClick("=")}>=</button>
          <button className='op' onClick={()=>handleClick("+")}>+</button>
        </div>
        <div className='options'>
          <button onClick={()=>handleClick("AC")}>AC</button>
          <button onClick={()=>handleClick("DEL")}>DEL</button>
        </div>
      </div>
    </>
  ) 

}

export default App;
