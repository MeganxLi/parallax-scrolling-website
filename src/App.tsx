import { useEffect, useRef, useState } from 'react'

import { styled } from '@linaria/react'
import { gsap } from "gsap"

import './App.css'

const Card = styled.div<CardProps>`
  padding: 2em;
  color: ${(props) => props.color};
`

const Box = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: blue;
  font-weight: 600;
  color: "#fff";
`

function App() {
  const [count, setCount] = useState(0)
  const app = useRef(null)

  useEffect(() => {
    console.log("useEffect");

    if (!app.current) return
    gsap.to(app.current, { rotate: 360, duration: 5 })

  }, [])

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <Box ref={app}>selector</Box>
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
