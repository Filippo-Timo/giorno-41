import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent.jsx';
import ImageComponent from './components/ImageComponent.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <ButtonComponent text="Hello" />
        <ButtonComponent text="How are you?" />
        <ButtonComponent text="How is going?" />
      </div>
      <div class="container">
        <ImageComponent src="https://placedog.net/100" alt="doggo" />
        <ImageComponent src="https://placedog.net/150" alt="doggo" />
        <ImageComponent src="https://placedog.net/200" alt="doggo" />
      </div>
    </>
  )
}

export default App
