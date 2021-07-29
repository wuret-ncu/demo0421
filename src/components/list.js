import React from 'react';
import Item from './item';

//list
const List = ({listData,deleteData,changedata}) =>{
    //console.log ('changedata',changedata)   
    return(
        <div>
            {
                listData.map((item) =>{
                    const {note,id,completed} = item
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