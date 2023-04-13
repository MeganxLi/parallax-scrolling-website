import CarouselList from "../../constants/QuestionCarousel"
import { QuestionBlock, QuestionCarousel, QuestionCarouselIndicators, QuestionCarouselItem, QuestionMark } from "../../styled/pages/Home"
import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Question = () => {
  const questionBlockRef = useRef<HTMLDivElement>(null)
  const carouseItemRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 預設隱藏所有 carouseItem
    gsap.set(carouseItemRef.current, { autoAlpha: 0, y: '100%' });

    const srollTL = gsap.timeline({
      scrollTrigger: {
        trigger: questionBlockRef.current,
        start: 'top top',
        end: 'bottom top+=100',
        toggleClass: "active",
        pin: true,
        // pinSpacing: true,
        scrub: true,
        markers: true,

      },
    });

    srollTL
      .to(questionBlockRef.current, {
        y: '0',
      }, "<")
      .to(carouseItemRef.current[1], {
        autoAlpha: 1,
        y: '0%',
      }, ">+=2")
      .to(carouseItemRef.current[0], {
        autoAlpha: 1,
        y: '20vh',
      }, ">+=2")
      .to(carouseItemRef.current[2], {
        autoAlpha: 1,
        y: '-20vh',
      }, ">+=2");
  }, [])

  return (
    <QuestionBlock ref={questionBlockRef}>
      <QuestionCarousel>
        <QuestionCarouselIndicators>
          {CarouselList.map((item: CarouselListType) => {
            return <button key={item.text} />
          })}
        </QuestionCarouselIndicators>

        {CarouselList.map((item: CarouselListType) => {
          return <QuestionCarouselItem
            ref={(el) => (carouseItemRef.current = [...carouseItemRef.current, el])}
            key={item.text}
            color={item.color}
            boxColor={item.boxColor}
            order={item.rwd}>
            {item.text}
          </QuestionCarouselItem>
        })}

      </QuestionCarousel>
      <QuestionMark src='./images/QuestionMark.png' />
    </QuestionBlock>
  )
}

export default Question
