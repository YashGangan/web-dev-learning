import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter-1)
  }
 return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
