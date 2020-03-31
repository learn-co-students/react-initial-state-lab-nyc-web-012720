// your Bomb code here!
import React, { Component } from "react"

class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    render(){

    return (
    <div>
        {this.state.secondsLeft === 0 ? <h2>Boom!</h2> : <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>}
    </div>
    )}
}

export default Bomb
