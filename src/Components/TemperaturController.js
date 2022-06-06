import React, {useState} from 'react'

function TemperaturController() {
    const [temp , setTemp] = useState(10)
  return (
    <div className = "app-container">
        <div className="temperature-display-container">
            <div className='temperature-display'>{temp}°C</div>
                   </div>
                   <div className='button-container'>
                       <button onClick={() => setTemp(temp +1)}>+</button>
                       <button onClick={() => setTemp(temp -1)}>-</button>
                   </div>
    </div>
  )
}

export default TemperaturController