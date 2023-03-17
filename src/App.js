import React from 'react';
import './App.css';
import Lists from './Lists';
import { Button, Container, Input, List, Typography } from '@mui/material';

function App() {
  const [inputList,SetInputList] = React.useState("")
  const [items,setItems] = React.useState([])
  React.useEffect(() => {
   const data =localStorage.getItem("some")
   if (data){
    setItems(JSON.parse(data))
   }
    }, []);



  function clear(){
    localStorage.removeItem("some")
  }

  function inputChange(event){
    SetInputList(event.target.value)

  }


  function saveItems(){
    if (inputList===""){
    return}
    setItems((prevItems)=>{
      return [...prevItems,inputList]
    })
    localStorage.setItem("some",JSON.stringify([...items,inputList]))
    console.log(localStorage.getItem("some"))
    SetInputList("")
  }
  function delItem(id){
    setItems((prevItems)=>{
      return prevItems.filter((element,index)=>{
        return index!==id
      })
    })
    



  }

  return (
    <Container fixed sx={{bgcolor:'#0f1e96',height:'100vh',width:'100vh'}} className='div-main' >
      <Container className='todo'><Typography sx={{color:"#effbfe" }} variant='h3'>Todo list</Typography><br></br>
      <Input sx={{
        py: 2,
        display: 'grid',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
        color:'#effbfe'
      }} type='text' 
      placeholder='tasks'
      onChange={inputChange}
      value={inputList} 
      className="input"/>
      <Button  sx={{m:2,bgcolor:'#effbfe'}} onClick={saveItems}  >+</Button>
      <Button sx={{m:2,bgcolor:'#effbfe',float:'right'}} onClick={clear}> clear</Button>
      <List>
        {items && items.map((val,index)=>{
          return <Lists text={val} 
          key={index}
          id={index}
          delFunc={delItem}
          />
        })}
      </List>
      </Container>
    </Container>
  );
}

export default App;
