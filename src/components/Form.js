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
        }
    })

    return (
        <form className="addToDo">
            <h3>{props.title}</h3>
            {items}
        </form>
    );
}