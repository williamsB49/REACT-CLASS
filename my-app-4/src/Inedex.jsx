import React, { Component } from 'react'

export class Inedex extends Component {
    constructor(){
        super();
        this.state ={
            items: 0,
        }
        console.log("constructor is called")
    }
    componentDidMount(){
        console.log("component did called")
    }
    componentDidUpdate(){
      console.log("component did update !!!!!!!!")
    }
    componentWillUnmount(){
      alert("the componet willUnmount!!!!!! 19031998")
    }
    handlecliked=()=>{
      this.setState({items: this.state.items+1})
    }
  render() {
    console.log("render is called")
    return (
      <>
       <div>Inedex</div>
       <p>count: {this.state.items}</p>
      <button onClick={this.handlecliked}>click me</button>
      </>
     
    )
  }
}

export default Inedex