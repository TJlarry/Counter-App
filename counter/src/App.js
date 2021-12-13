
import { Component } from 'react';
import './App.css';
import Counters from './components/Counters';
import NavBar from './components/NavBar';

class App extends Component {
  state = {Counters:  [ 
    {id: 1, value: 0},
    {id: 2, value: 7},
    {id: 3, value: 0},
    {id: 4, value: 0}
  ]
}
handleIncrement = counter => {
  const counters = [...this.state.Counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counters[index] };
  counters[index].value++;
  this.setState({ counters }); 
};

 handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index].value--;
  this.setState({ counters });
};

  render(){
  return (
    <div className="App">
      
        <NavBar totalvalue = {this.state.Counters.filter(c => c.value > 0).length}> </NavBar>
        <Counters Counters = {this.state.Counters} onIncrement = {this.handleIncrement}> </Counters>
      
    </div>
  );
}
}

export default App;
