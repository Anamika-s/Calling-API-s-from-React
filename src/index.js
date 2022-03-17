import React from 'react';
import ReactDOM from 'react-dom';
import Student1 from './StateDemo';
import PostDemo from './PostDemo';
import PersonRemove from './PersonRemove ';
import PersonEdit from './PersonEdit ';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { First}  from './FirstComponent';
// import Second from './SecondComponent';
// import Car  from './CarComponent';
import Callingservice from './Callingservice';
import App2 from './App2';

import e1 from './jsxDemo';
import Student from './PropsDemo';
import  Create from './FetchApiDemo';

const name ="Deepak";
function Show(name)
{
  return " Hello " +  name;
  
}
ReactDOM.render([<Callingservice/> ,<PostDemo /> ,<PersonRemove/>, <PersonEdit/> , <Create/>], document.getElementById("root"));

//ReactDOM.render(<Student name="Deepak"  roll="1"/> , document.getElementById("root") );
// ReactDOM.render(<Student1 marks="90"/> , document.getElementById("root") );
// ReactDOM.render(<App2/> , document.getElementById("root"));
// var reactNodeLi = React.createElement('li', {id:'li1'}, 'one');

//  // create React element <li>'s
// var rElmLi1 = React.createElement('li', {id:'li1'}, 'one');
// var rElmLi2 = React.createElement('li', {id:'li2'}, 'two');
// var rElmLi3 = React.createElement('li', {id:'li3'}, 'three');

// //create <ul> React element and add child React <li> elements to it
// var reactElementUl = React.createElement('ul', {className:'myList'}, rElmLi1,rElmLi2,rElmLi3);


// ReactDOM.render([reactElementUl, reactNodeLi, e1, name , Show("Ajay")] , document.getElementById("root"));


// ReactDOM.render(
//   <div>
//   <Second name="Deepak"/>
//   <Second name="Ajay"/>
//   <Second name="Parveen"/>
//   <Second name="Sagar"/>
//   <Car/>
//    </div>,
//   document.getElementById('root')
// );

 