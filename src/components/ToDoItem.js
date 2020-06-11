import React from 'react';

export default function ToDoItem(props){
    return (
        <div className="flex-row-item">
            <div className="item">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
            <div className="item-buttons">
                <button className="mark">Mark as Done</button>
                <button className="delete">Delete Task</button>
            </div>
        </div>
    );
}