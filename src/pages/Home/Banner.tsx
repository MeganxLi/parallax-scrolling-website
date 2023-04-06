import { BannerBlock, BannerTittle, SignUpButton, RectangleTop, RectangleRight, StarLeft, StarRight, FrontEnd, HouseImg, FlyImg } from '../../styled/pages/Home'
import { ReactComponent as RightArrowIcon } from "../../assets/svg/right_arrow.svg"

const Banner = () => {
  return (
    <BannerBlock>
      <BannerTittle>
        <h5>4th</h5>
        <h2 data-clone="THEF2E">THEF2E</h2>
        <h3>互動式網頁設計</h3>
        <p>前端 & UI 修煉精神時光屋</p>
      </BannerTittle>
      <RectangleTop src='./images/Rectangle.png' />
      <SignUpButton>點擊立刻報名 <RightArrowIcon /></SignUpButton>
      <RectangleRight src='./images/Rectangle.png' />
      <StarLeft src='./images/Star.png' />
      <StarRight>
        <img src='./images/Star.png' />
        <span>WEB DESIGN</span>
      </StarRight>
      <FrontEnd>FRONT END</FrontEnd>
      <HouseImg />
      <FlyImg />
    </BannerBlock>
  )
}

export default Banner
