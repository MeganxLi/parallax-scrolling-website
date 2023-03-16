import { useState } from 'react'

import { styled } from '@linaria/react'

import reactLogo from './assets/react.svg'
import './App.css'

const Card = styled.div<CardProps>`
padding: 2em;
color: ${(props) => props.color};
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card color="blue">
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          count is
          {count}
        </button>
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to test HMR
        </p>
      </Card>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
