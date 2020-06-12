import React from 'react';

export default function Filters(props){

    function createFilters(){
        const items = [];
    
        props.titles.forEach(element => {
            if(element.status === "active"){
                items.push(
                    <button className="filter-btn active" key={element.title}>{element.title}</button>
                );
            } else{
                items.push(
                    <button className="filter-btn" key={element.title}>{element.title}</button>
                );
            }
        })
        return items;
    }

    return (
        <div className="filters">
            {createFilters()}
        </div>
    );
}