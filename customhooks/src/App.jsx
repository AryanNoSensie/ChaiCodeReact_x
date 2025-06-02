/* eslint-disable no-unused-vars */
import React from 'react'
import { useState ,useEffect , useRef , useMemo , useCallback ,useContext } from 'react'
import './App.css'
import Profile from './components/Profile'
import Footer from './components/Footer'

















// useRef , makes the variable persistent across renders and it also make the things not render continously  and u can also access the dom elemnts 
// it creates renders but stops them re rendering agian again again !!!!!!!!!!!!!!!!!!!!!!!!!!!




// function App() {
//  const [count ,setCount] = useState(0);
// //  const[render, setRenders] = useState(0);
// const render = useRef(0);

//  useEffect(()=>{
//   render.current = render.current + 1;
//   console.log('useEffect called');
 
//  },[render.current]);

// // useEffect(() =>{
// //   setRenders(prev => prev + 1);

// // },[render])
//   return (
//     <>
     
//      <button onClick={()=>setCount(prev=>prev+-1)}>-1</button>
//      <h3>{count}</h3>
//      <button onClick={()=>setCount(prev=>prev+1)}>+1</button>
//      <h3>render count : {render.current}</h3>
    
     
//     </>
//   )
// }



//---------------------------------------------------------------------------------------------------------------------------------------


//useMemo  : The useMemo hook in React is used to optimize performance by memoizing the result of a function or calculation so it doesn’t get re-evaluated on every render unless its dependencies change.

// 🔍 Why use useMemo?
// Avoid expensive recalculations

// If you have a heavy computation (e.g., filtering a large list, sorting, calculations), you don’t want it to run on every render unnecessarily.

// useMemo ensures the result is cached and reused until dependencies change.

//usecallback are also similar ,as callback give memoised function while memo gives memoised value 
// function App(){

//   const [num, setNum] = useState(0);
//   const [counter , setCounter] = useState(0);




//    function cubeNum(num){
//     console.log('cubeNum called');
//     return Math.pow(num, 3);

//    }
//    const result = useMemo(()=>cubeNum(num),[num])

//   return(
//   <>
  
//     <input type="number"  value={num} onChange={(e)=>setNum(e.target.value)}/>
//     <h1>cube of the number : {result} </h1>
//     <button onClick={()=>setCounter(prev=>prev+1)}>counter++</button>
//     <h1>Counter value is : {counter}</h1>
  
  
  
//   </>

//   )
// }



// ---------------------------------------------------------------------------------------------------------------------------------------

// useCallback : The useCallback hook in React is used to memoize a function so that it does not get recreated on every render unless its dependencies change. 
// This is particularly useful when passing callbacks to child components to prevent unnecessary re-renders.










//--------------------------------------------------------------------

//usecontext : The useContext hook in React is used to access the context value from a Context Provider without needing to pass props down through every level of the component tree.
//basically helps in prop drilling and helps in accessing the context value without passing props down


//this is context api too , so do some serious concentraion on this topic pls 



const App = () => {




  
  return (
    <div>
      <Profile></Profile>
      <Footer></Footer>

      
    </div>
  )
}

export default App

