import React from "react"


function Student(props){
    console.log(props);
    return <div>
        
        <h3>Hello {props.name}</h3>
        <b>Address: </b>
        <span>{props.address}</span>
    </div>
}
export default Student;