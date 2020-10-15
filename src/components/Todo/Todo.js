import React from 'react'
import './Todo.css'


export default (props) => {

    return (
        
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {props.todo.complete ? (<div className="complete" key={props.key} style={{marginRight: '10px'}} onClick={props.onComplete}>{props.todo.text}</div>) :(<div key={props.key} style={{marginRight: '10px'}} onClick={props.onComplete}>{props.todo.text}</div>)}
            <button onClick={props.onDelete}>x</button>
        </div>

    )
}