import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import CarouselList from '../../constants/QuestionCarousel'
import {
  QuestionBlock, QuestionCarousel, QuestionCarouselIndicators, QuestionCarouselItem, QuestionMark,
} from '../../styled/pages/Home/Question'

const Question = () => {
  const questionBlockRef = useRef<HTMLDivElement>(null)
  const IndicatorsItemRef = useRef<(HTMLElement | null)[]>([])
  const carouseItemRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // 預設隱藏所有 carouseItem
    gsap.set(carouseItemRef.current, { autoAlpha: 0, y: '100%' })

    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: questionBlockRef.current,
        start: 'top top',
        end: 'bottom bottom',
        toggleClass: 'active',
        pin: true,
        pinSpacing: false,
        scrub: 2,
        // markers: true, // 顯示 ScrollTrigger 的觸發區域
        onToggle: (self) => {
          if (self.isActive) {
            gsap.to(questionBlockRef.current, {
              pinSpacing: false,
            })
          }
        },
      },
    })

    scrollTL
      .to(questionBlockRef.current, {
        y: '0',
      }, '<')
      .to(carouseItemRef.current[1], {
        autoAlpha: 1,
        y: '0%',
        onStart: () => {
          IndicatorsItemRef.current[0]?.classList.add('active')
        },
      }, '>+=2')
      .to(carouseItemRef.current[0], {
        autoAlpha: 1,
        y: '20vh',
        onStart: () => {
          IndicatorsItemRef.current[1]?.classList.add('active')
        },
      }, '>+=2')
      .to(carouseItemRef.current[2], {
        autoAlpha: 1,
        y: '-20vh',
        onStart: () => {
          IndicatorsItemRef.current[2]?.classList.add('active')
        },
      }, '>+=2')

    return () => {
      scrollTL.kill()
    }
  }, [])

  const handleIndicatorsItemRef = (el: HTMLElement | null) => {
    IndicatorsItemRef.current = [...IndicatorsItemRef.current, el]
  }

  const handleCarouseItemRef = (el: HTMLDivElement | null) => {
    carouseItemRef.current = [...carouseItemRef.current, el]
  }

  return (
    <QuestionBlock className="question-block" ref={questionBlockRef}>
      <QuestionCarousel>
        <QuestionCarouselIndicators>
          {CarouselList.map((item: CarouselListType) => (
            <span
              key={item.text}
              ref={handleIndicatorsItemRef}
            />
          ))}
        </QuestionCarouselIndicators>

        {CarouselList.map((item: CarouselListType) => (
          <QuestionCarouselItem
            className="question-carousel-item"
            ref={handleCarouseItemRef}
            key={item.text}
            color={item.color}
            boxColor={item.boxColor}
            order={item.rwd}
          >
            {item.text}
          </QuestionCarouselItem>
        ))}

      </QuestionCarousel>
      <QuestionMark src="./images/question-mark.png" alt="question mark" />
    </QuestionBlock>
  )
}

export default Question
