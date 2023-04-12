import CarouselList from "../../constants/QuestionCarousel"
import { QuestionBlock, QuestionCarousel, QuestionCarouselIndicators, QuestionCarouselItem, QuestionMark } from "../../styled/pages/Home"
import { useEffect, useRef } from 'react'
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

        start: "top center", // 從questionBlockRef 的中央開始觸發
        end: "+=100%", // 觸發點為畫面中央
        toggleClass: "active",
        scrub: true,
        markers: true,
      },
    });

    srollTL.to(carouseItemRef.current[0], {
      autoAlpha: 1,
      y: '20vh',
      duration: 1, //動畫執行的時間長度
    });
    srollTL.to(carouseItemRef.current[1], {
      autoAlpha: 1,
      y: '0%',
      duration: 1,
    });
    srollTL.to(carouseItemRef.current[2], {
      autoAlpha: 1,
      y: '-20vh',
      duration: 1,
    });
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
