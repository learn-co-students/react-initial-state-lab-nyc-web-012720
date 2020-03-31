import React, {Component} from 'react'

class ImageSlider extends Component{
    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        } 
    }

    // changeState = () => {
    //     console.log(`before setState: ${this.state.currentSlideIndex}`)
    //     this.setState({
    //         currentSlideIndex: `I am on slide ${this.state.currentSlideIndex}`  
    //     })
    //     console.log(`before setState: ${this.state.currentSlideIndex}`)
    // }

    render(){
        return (
            // <div onClick={this.changeState}>
            <div >
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}

export default ImageSlider 

