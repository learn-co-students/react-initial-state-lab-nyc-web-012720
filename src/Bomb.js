import React, {Component} from 'react'

class Bomb extends Component{
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount 
        } 
    }
    bombRender = () => {
        
        console.log(this.state.secondsLeft)
        if (this.state.secondsLeft !== 0){
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        }else if (this.state.secondsLeft == 0){
            return <div>Boom!</div>
        } 
    }
    render(){
        return (
            <div>
                {this.bombRender()}
            </div>
        )
    }
}

export default Bomb 
