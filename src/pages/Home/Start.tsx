import { useEffect } from 'react'

import { gsap } from 'gsap'

import Tag from '../../components/Tag'
import {
  CircleWhiteMain,
  CircleWhiteTitle, CircleWhite, StartBlock, StartLoopText, GreenSnow, CircleMainItem1,
} from '../../styled/pages/Home/Start'

const Start = () => {
  useEffect(() => {
    gsap.to('.loop-text', {
      xPercent: '-50',
      ease: 'none',
      duration: 8,
      repeat: -1,
    })
  }, [])

  return (
    <StartBlock>
      <StartLoopText className="loop-text">
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
          <img src="./images/start-title-illu.png" alt="start title background" />
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
        <GreenSnow src="./images/green-snow.png" alt="green snow" />
      </CircleWhite>

      <StartLoopText className="loop-text">
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
