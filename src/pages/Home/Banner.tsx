import { ReactComponent as RightArrowIcon } from '../../assets/svg/right_arrow.svg'
import {
  BannerBlock, BannerTittle, SignUpButton, RectangleTop, RectangleRight,
  StarLeft, StarRight, FrontEnd, HouseImg, FlyImg, LoopText,
} from '../../styled/pages/Home/Banner'
import useAnimationLoopText from '../../util/useAnimation'

const Banner = () => {
  useAnimationLoopText('.banner-loop')

  return (
    <BannerBlock>
      <BannerTittle>
        <h5>4th</h5>
        <h2 data-clone="THEF2E">THEF2E</h2>
        <h3>互動式網頁設計</h3>
        <p>前端 & UI 修煉精神時光屋</p>
      </BannerTittle>
      <RectangleTop src="./images/rectangle-img.png" alt="rectangle" />
      <SignUpButton>
        點擊立刻報名
        <RightArrowIcon />
      </SignUpButton>
      <RectangleRight src="./images/rectangle-img.png" alt="rectangle" />
      <StarLeft src="./images/star-img.png" />
      <StarRight>
        <img src="./images/star-img.png" alt="Star" />
        <span>WEB DESIGN</span>
      </StarRight>
      <FrontEnd>FRONT END</FrontEnd>
      <HouseImg />
      <FlyImg />
      <LoopText className="banner-loop">
        THEF2E THEF2E THEF2E THEF2E THEF2E THEF2E THEF2E THEF2E THEF2E
      </LoopText>
    </BannerBlock>
  )
}

export default Banner
