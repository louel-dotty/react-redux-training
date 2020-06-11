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
            title: "Task Title1",
            content: "Task Details. Lorem Ipsum potaluten"
        },
        {
            title: "Task Title2",
            content: "Task Details. Lorem Ipsum potaluten"
        },   
        {
            title: "Task Title3",
            content: "Task Details. Lorem Ipsum potaluten"
        },
        {
            title: "Task Title4",
            content: "Task Details. Lorem Ipsum potaluten"
        },      
        {
            title: "Task Title5",
            content: "Task Details. Lorem Ipsum potaluten"
        },
        {
            title: "Task Title6",
            content: "Task Details. Lorem Ipsum potalutenTask Details. Lorem Ipsum potalutenTask Details. Lorem Ipsum potalutenTask Details. Lorem Ipsum potalutenTask Details. Lorem Ipsum potalutenTask Details. Lorem Ipsum potaluten"
        },           
    ]

    return (
        <div className="mainContainer">
            <div className="flex-row">
                <div className="flex-column">
                    <h1>Louel's Task Maker</h1>
                    <div className="addTaskContainer">
                        <Form fields={fields} title="Add Task"/>
                    </div>
                </div>
                <ToDoList taskList={tasks}/>
            </div>
        </div>
    );
}