import React from 'react';
import './App.css';
import Nav from './components/nav.js';
import Additem from './components/additem';
import Todolist from './components/list.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listdata:["讀書","寫作業","畫畫"]
    };
  }
  render(){
    return(
      <div className="content">
        <h2>To Do List</h2>
        <Additem />
        <Nav />
        <Todolist name={this.state.listdata}/>
      </div>
    );
  }
  
}

export default App;
