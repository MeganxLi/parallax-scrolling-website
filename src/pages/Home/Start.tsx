import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Tag from '../../components/Tag'
import {
  CircleMainTitle, CircleMain, CircleMainBox, StartBlock,
  StartLoopText, GreenSnow, CircleMainItem1, CircleSub,
  SubBoxTitle, SubBoxTitleBg, SubBoxText, SubBox, SubBoxStarImg, SubBoxSnowImg,
} from '../../styled/pages/Home/Start'
import colors from '../../styled/util/Variables'
import useAnimationLoopText from '../../util/useAnimation'

const Start = () => {
  const StartBlockRef = useRef<HTMLDivElement>(null)
  const CircleMainRef = useRef<HTMLDivElement>(null)
  const CircleSubRef = useRef<HTMLDivElement>(null)

  useAnimationLoopText('.start-loop-text')

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: StartBlockRef.current,
        start: 'top top',
        end: '30% bottom',
        scrub: 1,
        once: true, // 只顯示一次
        // markers: true, // 顯示觸發區域
      },
    })

    scrollTL
      .fromTo(
        CircleMainRef.current,
        { transform: 'translate(-50%, 100%)', opacity: 0 },
        { transform: 'translate(-50%, 0%)', opacity: 1, ease: 'power2.inOut' },
        1, // 指定 CircleSubRef 同時開始的時間點
      )
      .fromTo(
        CircleSubRef.current,
        { transform: 'translate(-50%, 100%)', opacity: 0, backgroundColor: colors.orange[2] },
        { transform: 'translate(-50%, 10%)', opacity: 1, ease: 'power2.inOut' },
        1,
      )
      .fromTo(
        '.Move_Left',
        { transform: 'translateX(-100%)', opacity: 0 },
        {
          transform: 'translateX(0%)', opacity: 1, duration: 2, delay: 3, ease: 'power2.inOut',
        },
        8, // 指定 .Move_Right 同時開始的時間點
      )
      .fromTo(
        '.Move_Right',
        { transform: 'translateX(100%)', opacity: 0 },
        {
          transform: 'translateX(0%)', opacity: 1, duration: 2, delay: 3, ease: 'power2.inOut',
        },
        8,
      )
      .to(
        CircleSubRef.current,
        { backgroundColor: colors.orange[1], delay: 1, transform: 'translate(-50%, 0%)' },
        10,
      )
      .fromTo(
        '.Move_Top',
        { transform: 'translateY(100%)', opacity: 0 },
        {
          transform: 'translateY(0%)', opacity: 1, delay: 1, ease: 'power2.inOut',
        },
        10,
      )
  }, [])

  return (
    <StartBlock ref={StartBlockRef}>
      <StartLoopText className="start-loop-text">
        {[...Array(3)].map((_, idx: number) => (
          <p key={idx}>
            {[...Array(8)].map((__, i: number) => (
              <span key={i}>THEF2E</span>
            ))}
          </p>
        ))}
      </StartLoopText>
      <CircleMain ref={CircleMainRef}>
        <CircleMainTitle>
          <img src="./images/start-title-illu.png" alt="start title background" />
          <h3>互動式網頁設計</h3>
        </CircleMainTitle>
        <CircleMainBox>
          <CircleMainItem1 className="Move_Left">
            <p className="circle-main-title">{'<hello-world />'}</p>
            <Tag initText="UI設計師" fontSize={40} className="circle-main-title-ui circle-main-title" />
            <Tag initText="前端工程師" fontSize={40} className="circle-main-title-front-end circle-main-title" />
            <img src="./images/line-box.png" alt="line box" />
          </CircleMainItem1>
          <img className="Move_Right" src="./images/solution-three-circle.png" alt="solution three circle" />
          <img className="Move_Right" src="./images/figma.png" alt="Figma logo" />
          <Tag initText="Build Good Products Together" fontSize={48} className="Move_Right circle-main-tag-build-good circle-main-title" />
        </CircleMainBox>
        <GreenSnow src="./images/green-snow.png" alt="green snow" />
      </CircleMain>
      <CircleSub ref={CircleSubRef}>
        <SubBox className="Move_Top">
          <SubBoxStarImg src="./images/star-img.png" alt="star" />
          <SubBoxTitle>年度最強合作</SubBoxTitle>
          <SubBoxTitleBg>三大主題來襲</SubBoxTitleBg>
          <SubBoxText>各路廠商強強聯手！</SubBoxText>
          <SubBoxText>共同設計出接地氣的網頁互動挑戰關卡</SubBoxText>
          <SubBoxSnowImg src="./images/green-snow.png" alt="green-snow" />
        </SubBox>
      </CircleSub>

      <StartLoopText className="start-loop-text">
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
