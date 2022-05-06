import { Component } from "react";

export class CCounter extends Component { 
    state = { count: 0 };
    increment = () => { 
        this.setState({ count: this.state.count + 1 });
    };
    decrement = () => { 
        this.setState({ count: this.state.count - 1 });
    };
    reset = () => { 
        this.setState({ count: 0 });
    };
    render() { 
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );    
    }
}