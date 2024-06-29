import React, {useEffect, useState} from "react"
import logo from './logo.svg';
import axios from "axios"
import './App.css';

function App() {
const [list,setList]=useState([])
const [loading,setLoading]=useState(false)



const getRandomData = async()=>{
  Object.keys()
  if(loading){
    alert("Api Request already in processing")
    return
  }
const randomNumber = Math.floor(Math.random() * 10)
const isExist = list.find((e)=>e.no===randomNumber)
if(isExist){
  alert("try again")
  return
}

setLoading(true)
await axios.get(`https://swapi.dev/api/people/${randomNumber}`).then((res)=>{
setList((prev)=>{
  return [
    ...prev,
    {...res?.data,no:randomNumber}
  ]
})
setLoading(false)
}).catch(()=>{
  alert("Something went wrong")
  setLoading(false)
})
}


const handleDelete =(index)=>{
var newList = list?.filter((e)=>e.created !== index)

setList(newList)

}



useEffect(()=>{
console.log(list);
},[list])


  return (
    <div className="App">
      <div>
        <button onClick={getRandomData}>{loading?"Adding Record..":"Add Record"}</button>
      </div>

      <div>


        {/* list here */}

        <table style={{width:"100%"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {list?.map((el,index)=>{
              return (
                <tr>
                  <td>
                    <p style={{color:"black"}}>

                    {el?.name}
                    </p>
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(el?.created)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>


   
    </div>
  );
}

export default App;
