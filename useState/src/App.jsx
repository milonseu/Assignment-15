import { useState } from "react";

function App() {
  const [List, setList] = useState([]);
  const [item,setItem] = useState("");

  const AddToList=()=>{
    List.push(item);
    setList([...List]);
  }

  const Removed=(index)=>{
    List.splice(index,1);
    setList([...List]);
  }

  return (
    <>
      <div>
        <input onChange={(e)=>{setItem(e.target.value)}} placeholder="item"/>
        <button onClick={AddToList}>Add Task</button>
        <hr/>
        <table>
          <table>
            {
              List.length!==0?(List.map((element,index)=>{
                return(
                  <tr>
                    <td>{element}</td>
                    <td><button onClick={Removed}>Remove</button></td>
                  </tr>
                )
              })):(<tr></tr>)
            }
          </table>
        </table>
      </div>
    </>
  )
}

export default App
