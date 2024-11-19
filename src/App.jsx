import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './myComponent/Navbar'
import ReactFlowBox from './myComponent/ReactFlowBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='h-10'>

      </div>
      <div className='flex justify-center items-center m-10'>
      <ReactFlowBox/>
      </div>
    </>
  )
}

export default App
