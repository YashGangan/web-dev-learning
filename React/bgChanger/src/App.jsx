import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className='w-full h-screen text-center duration-300' style={{backgroundColor:color}}>
      <div className="p-2 w-1/5 gap-x-2 bg-gray-300">
      <button className='rounded-lg text-sm p-5 bg-white' onClick={()=> {setColor('red')}}>Red</button>
      <button className='rounded-lg text-sm p-5 bg-white' onClick={()=> {setColor('blue')}}>Blue</button>
      <button className='rounded-lg text-sm p-5 bg-white' onClick={()=> {setColor('green')}}>Green</button>
      </div>
    </div>
  )
}

export default App
