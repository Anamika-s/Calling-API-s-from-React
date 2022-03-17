import React, {Component} from 'react';

class Create extends Component 
{
  constructor(props)
  {
    super(props);
    this.state =
    {
 firstname:"",
 lastname:"",
 email:""
    }
  
    // this.handleName1 = (event)=>
    // {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    // this.setState({firstname: event.target.value});
    

    // }
    // this.handleName2= (event)=>
    // {
    //   console.log(event.target);
    // }
    // this.handleName3= (event)=>
    // {
    //   console.log(event.target);
    // }

    this.handleName= (event)=>
    {
       console.log(event.target);
       this.setState({[event.target.name] : event.target.value})
    }
    this.handleSubmit = (event)=>
    {
      console.log("Submitted");
      //  alert(`My FirstName is ${this.state.firstname}`);
      //  alert(`My FirstName is ${this.state.lastname}`);
      //  alert(`My FirstName is ${this.state.email}`);
       alert(JSON.stringify(this.state));
       fetch("https://reqres.in/api/users", {
         method:'POST',
         headers :
         {
           'Accept' :'application/json',
           'Content-Type' :'application/json'
         },
         body: JSON.stringify(this.state)
        }).then((resp)=>
        {
           resp.json((result)=>
           {
              console.log(result);
           })
        })
      }
     
  
  }
  render()
  {
    return(
    <div>
       <form onSubmit={this.handleSubmit}>
         <div>
         <label> First Name </label>
         <input type="text"  name="firstname" value={this.state.firstname} onChange={this.handleName} />
         </div>
         <div>
         <label> Last Name </label>
         <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleName}/>
         </div>
         <div>
         <label> EMail </label>
         <input type="text" name="email" value={this.state.email} onChange={this.handleName} />
         </div>
         <input type="submit" value="Submit"/>
       </form>
    </div>
    );
  }
}

export default Create;
