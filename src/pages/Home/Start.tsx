import { useRef } from 'react'

import Tag from '../../components/Tag'
import {
  CircleWhiteMain,
  CircleWhiteTitle, CircleWhite, StartBlock, StartLoopText, GreenSnow, CircleMainItem1,
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
        <CircleWhiteTitle>
          <img src="./images/StartTitleIllu.png" alt="start title background" />
          <h3>互動式網頁設計</h3>
        </CircleWhiteTitle>
        <CircleWhiteMain>
          <CircleMainItem1>
            <p>{'<hello-world />'}</p>
            <Tag initText="UI設計師" fontSize={40} className="ui" />
            <Tag initText="前端工程師" fontSize={40} className="front-end" />
            <img src="./images/line-box.png" alt="line box" />
          </CircleMainItem1>
          <img src="./images/solution-three-circle.png" alt="solution three circle" />
          <img src="./images/figma.png" alt="Figma logo" />
          <Tag initText="Build Good Products Together" fontSize={48} className="build-good" />
        </CircleWhiteMain>
        <GreenSnow src="./images/GreenSnow.png" alt="green snow" />
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
