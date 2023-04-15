import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'

import { ReactComponent as RightArrowIcon } from '../../assets/svg/right_arrow.svg'
import {
  BannerBlock, BannerTittle, SignUpButton, RectangleTop, RectangleRight,
  StarLeft, StarRight, FrontEnd, HouseImg, FlyImg, LoopText,
} from '../../styled/pages/Home'

const Banner = () => {
  const LoopTextRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    gsap.to(LoopTextRef.current, {
      xPercent: '-50',
      ease: 'none',
      duration: 8,
      repeat: -1,
    })
  }, [])

  return (
    <BannerBlock>
      <BannerTittle>
        <h5>4th</h5>
        <h2 data-clone="THEF2E">THEF2E</h2>
        <h3>互動式網頁設計</h3>
        <p>前端 & UI 修煉精神時光屋</p>
      </BannerTittle>
      <RectangleTop src="./images/Rectangle.png" />
      <SignUpButton>
        點擊立刻報名
        <RightArrowIcon />
      </SignUpButton>
      <RectangleRight src="./images/Rectangle.png" />
      <StarLeft src="./images/Star.png" />
      <StarRight>
        <img src="./images/Star.png" alt="Star" />
        <span>WEB DESIGN</span>
      </StarRight>
      <FrontEnd>FRONT END</FrontEnd>
      <HouseImg />
      <FlyImg />
      <LoopText ref={LoopTextRef}>
        THEF2E THEF2E THEF2E THEF2E THEF2E THEF2E THEF2E THEF2E THEF2E
      </LoopText>
    </BannerBlock>
  )
}

export default Banner
