import React,{useState} from 'react'

function ChangeText() {
    const [text, setText] = useState("Subscribe")
  return (
    <div>
        <h2>{text}</h2>
        <button onClick={() => setText("ThankYou Goodluck")}>Click me</button>
    </div>
  )
}

export default ChangeText