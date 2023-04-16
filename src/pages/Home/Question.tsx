import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import CarouselList from '../../constants/QuestionCarousel'
import {
  QuestionBlock, QuestionCarousel, QuestionCarouselIndicators, QuestionCarouselItem, QuestionMark,
} from '../../styled/pages/Home'

const Question = () => {
  const questionBlockRef = useRef<HTMLDivElement>(null)
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
        markers: true,
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
      }, '>+=2')
      .to(carouseItemRef.current[0], {
        autoAlpha: 1,
        y: '20vh',
      }, '>+=2')
      .to(carouseItemRef.current[2], {
        autoAlpha: 1,
        y: '-20vh',
      }, '>+=2')
  }, [])

  const handleCarouseItemRef = (el: HTMLDivElement | null) => {
    carouseItemRef.current = [...carouseItemRef.current, el]
  }

  return (
    <QuestionBlock className="question-block" ref={questionBlockRef}>
      <QuestionCarousel>
        <QuestionCarouselIndicators>
          {CarouselList.map((item: CarouselListType) => <button key={item.text} type="button" />)}
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
      <QuestionMark src="./images/QuestionMark.png" />
    </QuestionBlock>
  )
}

export default Question
