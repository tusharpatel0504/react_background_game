import { useState } from 'react'
import './Maincompt.css'

function Maincompt() {
  const [color, setColor] = useState(" Lavender")

  return (
    <>
    <div className="w-full h-screen flex items-end justify-center"  style = {{backgroundColor: color}}>
     
    <div className=" flex-wrap bg-slate-600 px-3 py-2 rounded-3xl flex justify-center items-center mb-6 gap-5">
        <button onClick={() => setColor("white") } className='bg-white rounded-full p-3  text-center flex items-center justify-center font-bold'> White</button>
        <button onClick={() => setColor("black") }className='bg-black rounded-full p-3  text-center flex items-center justify-center font-bold text-white'> Black</button>
        <button onClick={() => setColor("red") }className='bg-red-700 rounded-full p-3  text-center flex items-center justify-center font-bold  text-white'> Red</button>
        <button onClick={() => setColor("green") }className='bg-green-700 rounded-full p-3  text-center flex items-center justify-center font-bold  text-white'> Green</button>
        <button onClick={() => setColor("blue") }className='bg-blue-800 rounded-full p-3  text-center flex items-center justify-center font-bold  text-white'> Blue</button>
        <button onClick={() => setColor("olive") }className='bg-[#5c5c00] rounded-full p-3  text-center flex items-center justify-center font-bold  text-white'> Olive</button>
        <button onClick={() => setColor("gray") }className='bg-[#5d5d5d] rounded-full p-3  text-center flex items-center justify-center font-bold  text-white'> Gray</button>
        <button onClick={() => setColor("yellow") } className='bg-yellow-400 rounded-full p-3  text-center flex items-center justify-center font-bold  '> Yellow</button>
        <button onClick={() => setColor("pink") } className='bg-pink-400 rounded-full p-3  text-center flex items-center justify-center font-bold text-white '> Pink</button>
        <button onClick={() => setColor("purple") }className='bg-purple-600 rounded-full p-3  text-center flex items-center justify-center font-bold text-white '> Purple</button>
        <button onClick={() => setColor("lavender ") }className='bg-[#E6E6FA] rounded-full p-3  text-center flex items-center justify-center font-bold '> Lavender </button>
    </div>
    </div>
    </>
  )
}

export default Maincompt
