import React from 'react';

export default function Form(props){
    const items = [];

    props.fields.forEach(element => {
        switch(element.type){
            case "text":
                items.push(
                    <label>
                        {element.label}
                        <input className="field" type="text"/>
                    </label>
                );
                break;
            case "textarea":
                items.push(
                    <label>
                        {element.label}
                        <textarea className="field"/>
                    </label>
                );
                break;
            default:
                console.log("Error: Form type not specified");
                break;
        }
    })

    return (
        <form className="formCard">
            <h2>{props.title}</h2>
            {items}
            <button className="confirm">Add</button>
        </form>
    );
}