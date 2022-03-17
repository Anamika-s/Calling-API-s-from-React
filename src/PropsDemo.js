import React from 'react';
function Student(props)
{
    return (
        <div> This is First Demo
          Hello, {props.name}
          Your RollNo is {props.roll}  </div>
    );
}

export default Student;