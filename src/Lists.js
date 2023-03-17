import {  ListItem } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Lists(props) {
    
  return (
    <>
      <ListItem sx={{color:"#effbfe" }} className="list-items" >
        <DeleteIcon 
          onClick={() => {
            props.delFunc(props.id);
          }}
        ></DeleteIcon>&nbsp;
        {props.text}
        
      </ListItem>
    </>
  );
}
