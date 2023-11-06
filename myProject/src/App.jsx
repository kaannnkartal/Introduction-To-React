import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Kaan from './components/Kaan'
import Deneme from './components/Deneme';


function App() {

  const [count, setCount] = useState(0);

  const statuTrue = "TRUE";
  const statueFalse ="FALSE"
  const [statu , setStatu] = useState(false);

  const surname = "Kartal";

  const arr = [
    {name : "array1", id : 0},
    {name : "array2", id : 1},
    {name : "array3", id : 2}
  ]
  // Map dışarıdan aldığımız verileri jsx'de kullanmamızı sağlıyor.

  console.log(arr, "arr");

  const clickFunction = () =>{
    console.log("Butona tıklandı!")
    setCount(count+1);
  }

  const changeStatu = (statuFlag) =>{
    setStatu(!statuFlag);
  }


  return (
    <>
      <div className='App'>
        {/* Component Mantığı */}
        <Kaan surname = {surname}/>
        <Deneme></Deneme>

        <br />
   

        <button onClick={() => clickFunction}>Click</button>
        <div>
          <p>Count : {count}</p>
        </div>
        <div>
          
          <button onClick={() => changeStatu(statu)}>Change Statu</button>
          <p>{statu ? statuTrue : statueFalse}</p>
        </div>

          

      </div>
    </>
  )
}

export default App
