import React from "react"
export default function Lists(props){
    return (
        <>
        <li 
        onClick={(()=>{
            props.delFunc(props.id)
        })}>☑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {props.text}

        </li>
        </>
    )
}