import React from 'react';
import './App.css';
import Nav from './components/nav.js';
import Additem from './components/additem';
import List from './components/list.js';
import { nanoid } from 'nanoid';
import { useState,useEffect} from 'react';

const App = () =>{
  const [data, setdata] = useState([
    {id:nanoid(),note:"讀書",completed:false},
    {id:nanoid(),note:"寫作業",completed:false},
    {id:nanoid(),note:"畫畫",completed:false}
  ]);
 
  /*
  useEffect(()=>{
    console.log(data)
  }, [data])
  */

 return(
    <div className="content">
      <h2>To Do List</h2>
      <Additem add={setdata}/>
      <Nav />
      <List listData={data} deleteData={setdata} changedata={setdata} />
    </div>
  );
}
export default App;
