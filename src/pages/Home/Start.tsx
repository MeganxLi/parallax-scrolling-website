import { useRef } from 'react'

import {
  CircleTitle, CircleWhite, StartBlock, StartLoopText,
} from '../../styled/pages/Home'

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
      <CircleWhite>
        <CircleTitle>
          <img src="./images/StartTitleIllu.png" alt="start title background" />
          <h3>互動式網頁設計</h3>
        </CircleTitle>
        <img src="./images/GreenSnow.png" alt="green snow" />
      </CircleWhite>

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
