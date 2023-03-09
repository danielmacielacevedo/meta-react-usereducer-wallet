import './App.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'ride') return {money: state.money + 30};
  if (action.type === 'fuel') return {money: state.money - 50};
  return new Error();
}

function App() {
  
  const initialState = {money: 1000};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div className='UseReducerContent'>
        <h1>Wallet: ${state.money}</h1>
        <div className='UseReducerButtons'>
          <button onClick={() => dispatch({type: 'ride'})}>A new customer! +30</button>
          <button onClick={() => dispatch({type: 'fuel'})}>Refil the tank! -50</button>
        </div>
      </div>

      <div className="PoweredByDanielMacielAcevedo">
        <p>Powered by Daniel Maciel Acevedo</p>
        <a href="https://google.com/" ><span></span>ver codigo</a>
      </div>
    </div>
  );
}

export default App;
