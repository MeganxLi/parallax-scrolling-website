import React, { useRef } from 'react'

import { StartBlock, StartLoopText } from '../../styled/pages/Home'

const Start = () => {
  const LoopTextRef = useRef<HTMLDivElement>(null)

  return (
    <StartBlock>
      <StartLoopText ref={LoopTextRef}>
        {[...Array(3)].map((_, idx: number) => (
          <p key={idx}>
            {[...Array(8)].map((__, i: number) => (
              <span key={i}>THEF2E</span>
            ))}
          </p>
        ))}
      </StartLoopText>

      <StartLoopText ref={LoopTextRef}>
        {[...Array(3)].map((_, idx: number) => (
          <p key={idx}>
            {[...Array(8)].map((__, i: number) => (
              <span key={i}>THEF2E</span>
            ))}
          </p>
        ))}
      </StartLoopText>

    </StartBlock>
  )
}
export default Start
