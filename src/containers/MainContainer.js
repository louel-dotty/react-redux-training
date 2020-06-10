import React from 'react';
import Form from '../components/Form'

export default function MainContainer(){
    const fields = [
        {
            type: "text", 
            label: "Task Title"
        },
        {
            type: "textarea", 
            label: "Task Details"
        },
    ];

    return (
        <div className="mainContainer">
            <h1>To Do List App</h1>
            <div className="addTaskContainer">
                <Form fields={fields} title="Add Task"/>
            </div>
            <div className="toDoItems">
                <div className="filters">

                </div>
            </div>
        </div>
    );
}