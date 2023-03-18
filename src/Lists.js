import {  Checkbox, ListItem } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Lists(props) {
    const [tick,setTick] = React.useState(false)
    function toggleClick(event){
      setTick(event.target.checked)
    }
  return (
    <>
      <ListItem sx={{color:"#effbfe", }} className="list-items" >
        <Checkbox checked={tick} onChange={toggleClick} />
        <DeleteIcon 
          onClick={() => {
            props.delFunc(props.id);
          }}
        ></DeleteIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {props.text}
        
      </ListItem>
    </>
  );
}
