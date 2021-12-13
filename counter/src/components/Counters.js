import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {
    render() {
        return (
            <div >

                <button 
                    className = "btn btn-sucesss m-2" 
                    onClick = {this.props.onReset} 
                    disabled = {this.props.Counters.length === 0 ? "disable": ""}>
                    <i className="fa fa-refresh" aria-hidden="true" />  
                </button>

                <button
                    className = "btn btn-primary m-2" 
                    onClick = {this.props.onRestart} 
                    disabled = {this.props.Counters.length !== 0 ? "disable": ""}>
                    <i className="fa fa-recycle" aria-hidden="true" />  
                </button>
                {this.props.Counters.map(counter =>(
                     
                <Counter 
                key= {counter.id} 
                counter = {counter}
               onIncrement = {this.props.onIncrement}>
                </Counter>))}
                </div>
        )
    }
}
