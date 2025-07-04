import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card=({title})=>{
const [hasLiked, setHasLiked] = useState(false);

return(
 <div className='card-container'>
  <h1>{title}</h1>
  <button onClick={()=>setHasLiked(!hasLiked)}>
 {   hasLiked ? '❤️': '🤍'}
  </button>
 </div>
)
}



const App=()=> {
  

  return (
    <>
      <h1>hello</h1>
      <Card title="One"/>
      <Card title="Two"/>
    </>
  )
}

export default App
