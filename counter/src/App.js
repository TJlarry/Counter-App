
import { Component } from 'react';
import './App.css';
import Counters from './components/Counters';
import NavBar from './components/NavBar';

class App extends Component {
  state = {Counters:  [ 
    {id: 1, value: 0},
    {id: 2, value: 0},
    {id: 3, value: 0},
    {id: 4, value: 0}
  ]
}
handleIncrement = counter => {
  const Counters = [...this.state.Counters];
  const index = Counters.indexOf(counter);
  Counters[index] = { ...Counters[index] };
  Counters[index].value++;
  this.setState({ Counters }); 
};

 handleDecrement = counter => {
  const Counters = [...this.state.Counters];
  const index = Counters.indexOf(counter);
  Counters[index].value--;
  this.setState({ Counters });
};

handleDelete = counterId => {
  const Counters = this.state.Counters.filter(c => c.id !== counterId);
  this.setState({ Counters });
};

  render(){
  return (
    <div className="App">
      
        <NavBar totalvalue = {this.state.Counters.filter(c => c.value > 0).length}> </NavBar>
        <Counters 
        Counters = {this.state.Counters} 
        onIncrement = {this.handleIncrement} 
        onDecrement = {this.handleDecrement}
        onDelete =  {this.handleDelete}> 
        </Counters>
      
    </div>
  );
}
}

export default App;
