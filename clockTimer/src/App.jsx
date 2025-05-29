// working with conditional rendering  + cleanup +  useeeffect

//i am building a clock timer , which unmounts the timer and coditional render but the timer starts where it left off 

import {useState, useEffect} from 'react'

function  App(){


      const [Timer  , setTimer] = useState(0)
      const [Visible , setVisible ]  = useState(true);
      




      useEffect(function(){
       const toggele = setInterval(() => {
           setVisible(c=>!c)

       },5000)

       return () => clearInterval(toggele)
       },[])

     



      useEffect(function(){
if (!Visible){return } 

       let clock =  setInterval(() => {
            setTimer(c =>c+1)
        }, 1000);
          

        return ()=> clearInterval(clock)
          
    },[Visible])
    



    return(
        <div>
            <h3>time is </h3>
            <h3>{Visible ? Timer : "not visible"}</h3>


        </div>
    )
}

export default App