import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { ReactComponent as RightArrowIcon } from '../../assets/svg/right_arrow.svg'
import { ReactComponent as StarIcon } from '../../assets/svg/star.svg'
import ResolveList from '../../constants/ResolveList'
import {
  ResolveBlock,
  ResolveBody,
  ResolveHeader,
  ResolveItemButton,
  ResolveItemContent,
  ResolveItemSub,
  ResolveItemTag,
  ResolveItemTitle,
  ResolveSection,
  ResolveStar1,
  ResolveStar2,
  ResolveTitleBlock,
} from '../../styled/pages/Home/Resolve'

const Resolve = () => {
  const resolveBlockRef = useRef<HTMLDivElement>(null)
  const resolveItemRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // const scrollTL = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: resolveBlockRef.current,
    //     start: 'top top',
    //     end: '+=1000',
    //     pin: true, // 區塊固定
    //     scrub: 1,
    //     markers: true,
    //   },
    // })

    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: resolveBlockRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pinSpacing: false,
        pin: true,
        markers: true,
        scrub: 1,
        onUpdate: (self) => {
          const activeIndex = Math.floor(self.progress * 3)
          resolveItemRef.current.forEach((item, index) => {
            item?.classList.toggle('active', index === activeIndex)
          })
        },
      },
    })

    scrollTL.to('.resolve-item', {
      xPercent: -200,
      duration: 2,
      ease: 'power2.inOut',
    })

    // scrollTL
    //   .to(resolveBlockRef.current, {
    //     y: '0',
    //   }, '<')
    //   .to('.resolve-item', {
    //     xPercent: -200,
    //     onStart: () => {
    //       resolveItemRef.current[0]?.classList.add('active')
    //       resolveItemRef.current[1]?.classList.remove('active')
    //       resolveItemRef.current[2]?.classList.remove('active')
    //     },
    //     onUpdate: () => {
    //       resolveItemRef.current[0]?.classList.remove('active')
    //       resolveItemRef.current[1]?.classList.add('active')
    //       resolveItemRef.current[2]?.classList.remove('active')
    //     },
    //     onEnd: () => {
    //       resolveItemRef.current[0]?.classList.remove('active')
    //       resolveItemRef.current[1]?.classList.remove('active')
    //       resolveItemRef.current[2]?.classList.add('active')
    //     },
    //   })
  }, [])

  const handleResolveItemRef = (el: HTMLElement | null) => {
    resolveItemRef.current = [...resolveItemRef.current, el]
  }
  return (
    <ResolveBlock ref={resolveBlockRef}>
      <ResolveHeader>
        <ResolveStar1><StarIcon /></ResolveStar1>
        <ResolveStar2><StarIcon /></ResolveStar2>
        <ResolveTitleBlock>
          {ResolveList.map((item: ResolveListType) => (
            <ResolveItemTitle
              key={item.week}
              ref={handleResolveItemRef}
              color={item.color}
              className={`resolve-item ${item.week === 1 ? 'active' : ''}`}
            >
              {`Week${item.week}`}
            </ResolveItemTitle>
          ))}
        </ResolveTitleBlock>
      </ResolveHeader>
      <ResolveBody>
        {ResolveList.map((item) => (
          <ResolveSection key={item.week} className={item.week === 1 ? 'active' : ''}>
            <ResolveItemSub>
              {`/ ${item.title} /`}
            </ResolveItemSub>
            {item.tag.map((tag) => (
              <ResolveItemTag key={tag} color={item.color}>{`#${tag}`}</ResolveItemTag>
            ))}
            <ResolveItemContent>
              各組別投稿時間
              <br />
              UI 組投稿區間：
              {item.ui_time}
              <br />
              前端組投稿區間：
              {item.font_time}
            </ResolveItemContent>
            <ResolveItemButton>
              更多關卡資訊
              <RightArrowIcon />
            </ResolveItemButton>
          </ResolveSection>
        ))}
      </ResolveBody>
    </ResolveBlock>
  )
}

export default Resolve
