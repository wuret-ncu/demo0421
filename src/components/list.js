import React from 'react';
import './list.css';
function Data(props){
    return(
        <div className="list">
            <input type="checkbox" />
            <span>{props.name}</span>
            <button type="button">edit</button>
            <button type="button">delete</button>
        </div>
    )   
}
function Todolist(props){
    const datalist = props.name.map(value =>
        <Data key={value} name ={value} />)
    return(
        <div>
            {datalist}    
        </div>
    )  
}
export default Todolist;