import React, { Component } from 'react';
import Form from '../components/Form'
import ToDoList from '../components/ToDoList'
import { connect } from 'react-redux'


import { removeTask, toggleTask, filterTask } from '../actions/action'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  removeTask: (data) => dispatch(removeTask(data)),
  toggleTask: (data) => dispatch(toggleTask(data)),
  filterTask: (data) => dispatch(filterTask(data))
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class MainContainer
 * @extends {Component}
 */
class MainContainer extends Component {
    /**
     * @memberof MainContainer
     * @summary handles button click 
     */
    fields = [
        {
            type: "text", 
            label: "Task Title"
        },
        {
            type: "textarea", 
            label: "Task Details"
        },
    ];
    
    removeTask = (data) => {
        this.props.removeTask(data);
    }
    toggleTask = (data) => {
        this.props.toggleTask(data);
    }
    filterTask = (data) => {
        this.props.filterTask(data);
    }

    render(){
        return (
            <div className="mainContainer">
                <div className="flex-row">
                    <div className="flex-column">
                        <h1>Louel's Task Maker</h1>
                        <div className="addTaskContainer">
                            <Form fields={this.fields} title="Add Task"/>
                        </div>
                    </div>
                    <ToDoList taskList={this.props["simpleReducer"].taskList}/>
                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);