import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTask } from '../actions/action'


/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
    addTask: (data) => dispatch(addTask(data)),
  })
  
  /* 
   * mapStateToProps
  */
  const mapStateToProps = state => ({
    ...state
  })


function Form(props){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function createFields(){
        const items = [];
        props.fields.forEach(element => {
    
            switch(element.type){
                case "text":
                    items.push(
                        <label key={element.label}>
                            {element.label}
                            <input className="field" type="text" value={title} onChange={event => setTitle(event.target.value)}/>
                        </label>
                    );
                    break;
                case "textarea":
                    items.push(
                        <label key={element.label}>
                            {element.label}
                            <textarea className="field" value={content} onChange={event => setContent(event.target.value)}/>
                        </label>
                    );
                    break;
                default:
                    console.log("Error: Form type not specified");
                    break;
            }
        })
        return items;
    }

    const addTask = (data) => {
        props.addTask(data);
    }
    
    return (
        <form className="formCard">
            <h2>{props.title}</h2>
            {createFields()}
            <button className="confirm" onClick={ (event) => {
                event.preventDefault();
                addTask({
                    title: title,
                    content: content,
                    status: "ongoing"
                })
            }}>Add</button>
        </form>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);