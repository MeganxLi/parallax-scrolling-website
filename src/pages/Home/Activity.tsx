import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ActivityContentList from '../../constants/ActivityList'
import {
  ActivityBlock,
  ActivityContent,
  ActivityItem,
  ActivityItemContent,
  ActivityItemSub,
  ActivityItemTitle,
  GreenSmile,
  GreenSmileImg,
  GreenSmileText,
  GreenSnow, StarImgBottom, StarImgTop, WhiteLine,
} from '../../styled/pages/Home/Activity'
import { breakpoints } from '../../styled/util/Mixins'

const Activity = () => {
  const smileRef = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: smileRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
        markers: true,
      },
    })

    const replaceText = (text: string): number => Number(text.replace('px', ''))

    const smileRotation = (): number => {
      const { innerWidth } = window
      let rotation = 0

      switch (true) {
        case innerWidth > replaceText(breakpoints['2xl']):

          rotation = 135
          break

        case innerWidth > replaceText(breakpoints.lg) && innerWidth < replaceText(breakpoints['2xl']):
          rotation = 120
          break

        case innerWidth >= replaceText(breakpoints.md) && innerWidth < replaceText(breakpoints.lg):
          rotation = 25
          break

        default:
          rotation = 75
          break
      }

      return rotation
    }

    scrollTL.to(
      smileRef.current,
      { rotation: smileRotation() },
    )
  }, [])

  return (
    <ActivityBlock>
      <WhiteLine src="./images/white-line.png" alt="white line" />
      <GreenSmile className="green-smile" ref={smileRef}>
        <GreenSmileImg>
          <i />
          <i />
          <img src="./images/smile-line.png" alt="smile line" />
        </GreenSmileImg>
        <GreenSmileText>
          <span>挑</span>
          <span>戰</span>
          <span>流</span>
          <span>程</span>
        </GreenSmileText>
      </GreenSmile>
      <ActivityContent>
        <StarImgTop src="./images/star-img.png" alt="Star" />
        {ActivityContentList.map((item: ActivityContentListType) => (
          <ActivityItem className={item.class_name} key={item.title}>
            <ActivityItemTitle>{item.title}</ActivityItemTitle>
            <ActivityItemSub>{item.sub}</ActivityItemSub>
            <ActivityItemContent>{item.content}</ActivityItemContent>
          </ActivityItem>
        ))}
        <StarImgBottom src="./images/star-img.png" alt="Star" />
        <GreenSnow src="./images/green-snow.png" alt="green snow" />
      </ActivityContent>
    </ActivityBlock>
  )
}

export default Activity
