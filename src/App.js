import React from 'react';
import './App.css';
import Lists from './Lists';

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
    <div className='div-main'>
      <div className='todo'>Todo list<br></br>
      <input type='text' 
      placeholder='tasks'
      onChange={inputChange}
      value={inputList} />
      <button onClick={saveItems} className="addbtn" >+</button>
      <button onClick={clear} className="clrbtn"> clear</button>
      <ol>
        {items && items.map((val,index)=>{
          return <Lists text={val} 
          key={index}
          id={index}
          delFunc={delItem}
          />
        })}
      </ol>
      </div>
    </div>
  );
}

export default App;
