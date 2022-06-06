import React, {useState} from 'react'

function Counter(){
    const [count , setCount] = useState(0)


     const increment = () => {
          setCount(count+1)
      }
      const decrement = () => {
          if(count > 0){
            setCount(count-1)
          }else{
              setCount(0)
          }
    }
    

    return (
        <div>
        <h2>Count- {count} </h2>   
        <button onClick={increment}>Increment</button> 
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>    
        </div>
    )
}

export default Counter