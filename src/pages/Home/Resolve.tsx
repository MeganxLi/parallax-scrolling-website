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
  const resolveItemRefs = useRef<(HTMLElement | null)[]>([])
  const resolveSectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: resolveBlockRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: true, // 固定定位
        scrub: 0.5, // 平滑滾動
        // markers: true,
        onUpdate: (self) => {
          const activeIndex = Math.floor(self.progress * 3)
          const cappedIndex = activeIndex <= 2 ? activeIndex : 2 // 不得超過 2

          resolveItemRefs.current.forEach((item, index) => {
            item?.classList.toggle('active', index === cappedIndex)
          })
          resolveSectionRefs.current.forEach((section, index) => {
            section?.classList.toggle('active', index === cappedIndex)
          })
        },
      },
    })

    scrollTL
      .to('.resolve-item', {
        xPercent: '-180',
        duration: 1, // 調整滑動速度的持續時間
        ease: 'power2.inOut',
      })
  }, [])

  const handleResolveItemRef = (el: HTMLElement | null) => {
    resolveItemRefs.current = [...resolveItemRefs.current, el]
  }

  const handleResolveSectionRefs = (el: HTMLElement | null) => {
    resolveSectionRefs.current = [...resolveSectionRefs.current, el]
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
          <ResolveSection
            key={item.week}
            ref={handleResolveSectionRefs}
            className={item.week === 1 ? 'active' : ''}
          >
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
