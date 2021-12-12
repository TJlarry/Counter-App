import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-1">
                        <span style={{ fontSize: 24 }}> </span>
                     </div>

                    <div className="col-md-4">
                        <button className="btn btn-secondary">
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                        

                        <button className="btn btn-info m-2">
                        <i className="fa fa-minus-circle" aria-hidden="true" />
                        </button>

                        <button className="btn btn-danger">
                        <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                        
                    </div>
                </div>
            </div>
        )
    }

    getBadgeClasses = () => {
    let classes ="badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;    
};

formatCount = () => {
    const {value} = this.props.counter;
    return value === 0? "zero" : value;


}

}


/* { onClick={() => this.props.onIncrement(this.props.counter)} }
onClick={() => this.props.onDecrement(this.props.counter)}
{onClick={() => this.props.onDelete(this.props.counter.id)} }
disable={this.props.counter.value === 0 ? "disabled" : ""}
 */

