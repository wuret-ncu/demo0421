import React from 'react';
import Item from './item';
import { nanoid } from 'nanoid';

//list
const List = ({listData,deleteData,changedata}) =>{
    //console.log ('changedata',changedata)   
    return(
        <div>
            {
                listData.map((item) =>{
                    const {note,id = nanoid(),completed} = item
                    return (
                    <Item 
                    key={id}
                    id={id}
                    note={note} 
                    completed={completed}
                    deleteData={deleteData}
                    changedata={changedata}
                    />
                    );
                })
            }
        </div>
    ); 
}

export default List;