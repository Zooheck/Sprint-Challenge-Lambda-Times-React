import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,
      displayedImage: ''
    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData,
      currentIndex: 0,
      displayedImage: carouselData[this.state.currentIndex]
    })
  }

  leftClick = () => {
    this.setState(previousState => {
      if (previousState.currentIndex === 0) {
        return {
          currentIndex: previousState.images.length - 1,
          displayedImage: previousState.images[previousState.images.length - 1]
        }
      }
      return {
        currentIndex: previousState.currentIndex - 1,
        displayedImage: previousState.images[previousState.currentIndex - 1]
      }
    })
  }

  rightClick = () => {
    this.setState(previousState => {
      if (previousState.currentIndex === previousState.images.length - 1) {
        return {
          currentIndex: 0,
          displayedImage: previousState.images[0]
        }
      }
      return {
        currentIndex: previousState.currentIndex + 1,
        displayedImage: previousState.images[previousState.currentIndex + 1]
      }
    })
  }

  selectedImage = () => {
    return <img src={this.state.displayedImage} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}