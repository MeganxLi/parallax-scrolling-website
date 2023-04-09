import CarouselList from "../../constants/QuestionCarousel"
import { QuestionBlock, QuestionCarousel, QuestionCarouselIndicators, QuestionCarouselItem, QuestionMark } from "../../styled/pages/Home"

const Question = () => {
  return (
    <QuestionBlock>
      <QuestionCarousel>
        <QuestionCarouselIndicators>
          {CarouselList.map((item: CarouselListType) => {
            return <button key={item.text} />
          })}
        </QuestionCarouselIndicators>

        {CarouselList.map((item: CarouselListType) => {
          return <QuestionCarouselItem
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
