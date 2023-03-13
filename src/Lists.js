import React from "react"
export default function Lists(props){
    return (
        <>
        <li 
        onClick={(()=>{
            props.delFunc(props.id)
        })}>
        {props.text}

        </li>
        </>
    )
}