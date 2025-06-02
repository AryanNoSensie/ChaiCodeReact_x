// import { useState , useCallback } from 'react'

// import './App.css'

// function App() {
//   const [length , setLength] = useState(8)
//   const [ numberAllowed  , setnumberAllowed ] = useState(false)
//   const [ charAllowed , setcharAllowed ] = useState(false) 
//   const [password , setPassword] = useState('')


//  const passwordGenerator = useCallback ( ()=>{
//   let pass ="" ;
//   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
//   if (numberAllowed) str += "0123456789"
// if (charAllowed) str += "!@#$%^&*()_+"


// for (let i = 1; i <= array.length; i++) {
//   let char = Math.random() * str.length + 1;

//   pass = pass + str.charAt(char);

  
// }
// setPassword(pass);

//  },[length , numberAllowed , charAllowed , setPassword] )

 

//   return (
//     <>
//      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-600  bg-gray-700'>
//       <h1  className='text-white text-center'>
//         password generator
//       </h1>

//       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
         
//          <input
//           type="text"
//           value={password}
//           className='outline-none w-full py-1 px-3 bg-amber-50'
//           readOnly
//           />
//           <button className='outline-none bg-green-600 text-white px-3 py-1 shrink-0 cursor-pointer'>
//             copy
//           </button>
          
           

//       </div>
//      </div>
//     </>
//   )
// }

// export default App
