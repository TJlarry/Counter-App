
import './App.css';
import Counter from './components/Counter';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <NavBar totalvalue = '5'> </NavBar>
        <Counter> </Counter>
      {/* </header> */}
    </div>
  );
}

export default App;
