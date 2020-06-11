import React from 'react';
import Form from '../components/Form'
// import ToDoList from '../components/ToDoList'

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
            <div className="flex-row">
                <div className="flex-column">
                    <h1>TaskMaker.com</h1>
                    <div className="addTaskContainer">
                        <Form fields={fields} title="Add Task"/>
                    </div>
                </div>
                <div className="toDos">
                    {/* <ToDoList /> */}
                </div>
            </div>
        </div>
    );
}