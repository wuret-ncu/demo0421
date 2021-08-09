import React from 'react';
import './ToDoListComponent.css';
import Navbar from './navbar.js';
import Additem from './additem';
import List from './list.js';
import { nanoid } from 'nanoid';
import { useState,useEffect} from 'react';

const ToDoListComponent = () =>{
  const [data, setdata] = useState([
    {id:nanoid(),note:"讀書",completed:false},
    {id:nanoid(),note:"寫作業",completed:false},
    {id:nanoid(),note:"畫畫",completed:false}
  ]);
  const [completedData,setcompletedData]=useState([]);
  const [notCompletedData,setnotCompletedData]=useState([]);

  //隨data改變
  useEffect(()=>{
    
    setcompletedData(function (prev) {
      let arr = data.filter(item => item.completed === true);
      prev = arr
      return prev
    })
    
    setnotCompletedData(function (prev) {
      let arr = data.filter(item => item.completed === false);
      prev = arr
      return prev
    })
    //console.log(completedData,notCompletedData)
  },[data])

  const[listnum,setlist]= useState(1)

 return(
    <div className="content">
      <h2>To Do List</h2>
      <Additem add={setdata}/>
      <Navbar setlist={setlist}/>
      <List 
      listData={data}
      templist={data} 
      completedlist={completedData} 
      notcompletedlist={notCompletedData}
      listnum={listnum}
      deleteData={setdata} 
      changedata={setdata} />
    </div>
  );
}
export default ToDoListComponent;
