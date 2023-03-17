import { useState } from 'react'

import { styled } from '@linaria/react'
import { Tween, Timeline } from 'react-gsap'

import './App.css'

const Card = styled.div<CardProps>`
padding: 2em;
color: ${(props) => props.color};
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <Timeline>
        <Tween from={{ x: '0px' }} to={{ x: '100px' }} duration={1}>
          <div>Slide to the right</div>
        </Tween>
      </Timeline>
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
