import React from 'react';
import Filters from './Filters'
import ToDoItem from './ToDoItem'

export default function ToDoList(props){
    const titles = [
        {
            title: "All",
            status: "active"
        }, 
        {
            title: "Completed",
            status: ""
        }, 
        {
            title: "Ongoing",
            status: ""
        }
    ]

    const items =[];

    props.taskList.forEach(element => {
        items.push(
            <ToDoItem title={element.title} key={element.title} content={element.content} />
        )
    });

    return (
        <div className="toDos">
            <Filters titles={titles}/>
            <div className="toDoItems">
                {items}
            </div>
        </div>
    );
}