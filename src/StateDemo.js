import { Component } from 'react';
import React from 'react';

class Student1 extends Component{
    constructor(props)
    {
        super(props);
        this. state=
        { 
            name: "Ajay",
            address:"Delhi",
            marks : this.props.marks
       
        } 
     
        
    }
    
    
    handleClick = () =>{
        console.log("Button clicked", this);
        this.setState({name:"Deepak", address:"New Delhi"});        
      }
      
     
 

    render()
    {
    return (<div> {this.state.name} Your Address is {this.state.address} 
     Your Marks are {this.state.marks} 
{/* 
 <button type="button" onclick="add()"> Add </button>
<button type="button" onClick={add}> Add </button>  */}
     <button type="button" onClick={this.handleClick}> Click here </button> 
  

     
      </div>);
    }
   
    
}

export default Student1;