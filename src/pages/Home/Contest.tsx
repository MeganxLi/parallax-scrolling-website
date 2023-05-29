import { useEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

import classNameList from '../../constants/ContestList'
import Direction from '../../constants/Emun'
import {
  ContestBlock, ContestCard, ContestCardContent, ContestCardTitle, ContestTitle,
  ContestButton, ContestPoint,
} from '../../styled/pages/Home/Contest'
import useAnimationLoopText from '../../util/useAnimation'

const Contest = () => {
  useAnimationLoopText('.contest-title')

  const animated = (box: string, direction: string) => {
    const element: HTMLElement | null = document.querySelector(box)

    // 動畫方向
    let x: number = 0
    let y: number = 0
    switch (direction) {
      case Direction.LEFT:
        x = -100
        break

      case Direction.RIGHT:
        x = 100
        break

      case Direction.TOP:
        y = 100
        break

      case Direction.BOTTOM:
        y = -100
        break

      default:
        break
    }

    if (!element) return
    // 設定元素初始值
    element.style.transform = `translate(${x}px, ${y}px)`

    gsap.fromTo(
      element,
      {
        x, y, opacity: 0, visibility: 'hidden',
      },
      {
        duration: 1,
        delay: 0.2,
        x: 0,
        y: 0,
        visibility: 'visible',
        opacity: '1',
        ease: 'expo', // 元素的運動速度變化
        overwrite: 'auto',
      },
    )
  }

  const hide = (box: string) => {
    const element: HTMLElement | null = document.querySelector(box)

    if (!element) return
    gsap.set(element, { opacity: 0, visibility: 'hidden' })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    classNameList.forEach((item) => {
      const boxItem = `.${item.className}`

      ScrollTrigger.create({
        // 以 item 作為觸發時機
        trigger: boxItem,

        // 向下滾動進入 start 點時觸發 callback
        onEnter() {
          animated(boxItem, item.animationDirection)
        },

        // 向下滾動超過 end 點時觸發 callback
        onLeave() {
          hide(boxItem)
        },

        // 向上滾動超過 end 點時觸發（回滾時觸發）callback
        onEnterBack() {
          animated(boxItem, item.animationDirection)
        },
      })
    })
  }, [])

  return (
    <ContestBlock>
      <ContestTitle className="contest-title">區區修煉已經無法滿足了嗎？還有比賽等著你！</ContestTitle>
      <div className={classNameList[0].className}>
        <ContestPoint />
        <ContestCard direction>
          <ContestCardTitle>評審機制</ContestCardTitle>
          <ContestCardContent>
            <p>初選</p>
            <span>將由六角學院前端、UI 評審進行第一波篩選。</span>
            <p>決選</p>
            <span>由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！</span>
          </ContestCardContent>
        </ContestCard>
      </div>
      <div className={classNameList[1].className}>
        <ContestPoint />
        <ContestCard direction={false}>
          <ContestCardTitle>比賽獎項</ContestCardTitle>
          <ContestCardContent>
            <ol>
              <li>初選佳作 共六十位 數位獎狀</li>
              <li>個人企業獎 共六位 NTD 3,000/位</li>
              <li>團體企業獎 共三組 NTD 10,000/組</li>
              <li>以上皆提供完賽數位獎狀</li>
            </ol>
          </ContestCardContent>
        </ContestCard>
      </div>
      <div className={classNameList[2].className}>
        <ContestPoint />
        <ContestButton>立即報名!</ContestButton>
      </div>
    </ContestBlock>
  )
}

export default Contest
