import React from 'react';

export default function Filters(props){
    const items = [];

    props.titles.forEach(element => {
        if(element.status === "active"){
            items.push(
                <button className="filter-btn active">{element.title}</button>
            );
        } else{
            items.push(
                <button className="filter-btn">{element.title}</button>
            );
        }
    })

    return (
        <div className="filters">
            {items}
        </div>
    );
}