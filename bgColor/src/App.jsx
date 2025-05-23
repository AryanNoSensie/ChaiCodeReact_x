import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('grey');
  return (
<div className='w-full h-screen' style={{ backgroundColor: bgColor }}>

  <div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-2xl py-3'>
          <button onClick={()=>setBgColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style = { { backgroundColor: 'red' }} 
            >red</button>
            <button onClick={()=>setBgColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style = { { backgroundColor: 'blue' }} 
            >blue</button>
            <button onClick={()=>setBgColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style = { { backgroundColor: 'green' }} 
            >green</button>
        </div>
        
  </div>
    
</div>
  )
} 

export default App
 