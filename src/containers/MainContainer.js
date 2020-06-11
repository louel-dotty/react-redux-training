import React from 'react';
import Form from '../components/Form'
import ToDoList from '../components/ToDoList'

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

    const tasks = [
        {
            title: "Task Title",
            content: "Task Details. Lorem Ipsum potaluten"
        },
        {
            title: "Task Title",
            content: "Task Details. Lorem Ipsum potaluten"
        },        
    ]

    return (
        <div className="mainContainer">
            <div className="flex-row">
                <div className="flex-column">
                    <h1>TaskMaker.com</h1>
                    <div className="addTaskContainer">
                        <Form fields={fields} title="Add Task"/>
                    </div>
                </div>
                <ToDoList taskList={tasks}/>
            </div>
        </div>
    );
}