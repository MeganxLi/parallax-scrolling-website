import Tag from '../../components/Tag'
import {
  CircleMainTitle, CircleMain, CircleMainBox, StartBlock,
  StartLoopText, GreenSnow, CircleMainItem1, CircleSub,
  SubBoxTitle, SubBoxTitleBg, SubBoxText, SubBox, SubBoxStarImg, SubBoxSnowImg,
} from '../../styled/pages/Home/Start'
import useAnimationLoopText from '../../util/useAnimation'

const Start = () => {
  useAnimationLoopText('.start-loop-text')

  return (
    <StartBlock>
      <StartLoopText className="start-loop-text">
        {[...Array(3)].map((_, idx: number) => (
          <p key={idx}>
            {[...Array(8)].map((__, i: number) => (
              <span key={i}>THEF2E</span>
            ))}
          </p>
        ))}
      </StartLoopText>
      <CircleMain>
        <CircleMainTitle>
          <img src="./images/start-title-illu.png" alt="start title background" />
          <h3>互動式網頁設計</h3>
        </CircleMainTitle>
        <CircleMainBox>
          <CircleMainItem1>
            <p className="circle-main-title">{'<hello-world />'}</p>
            <Tag initText="UI設計師" fontSize={40} className="circle-main-title-ui circle-main-title" />
            <Tag initText="前端工程師" fontSize={40} className="circle-main-title-front-end circle-main-title" />
            <img src="./images/line-box.png" alt="line box" />
          </CircleMainItem1>
          <img src="./images/solution-three-circle.png" alt="solution three circle" />
          <img src="./images/figma.png" alt="Figma logo" />
          <Tag initText="Build Good Products Together" fontSize={48} className="circle-main-tag-build-good circle-main-title" />
        </CircleMainBox>
        <GreenSnow src="./images/green-snow.png" alt="green snow" />
      </CircleMain>
      <CircleSub>
        <SubBox>
          <SubBoxStarImg src="./images/star-img.png" alt="star" />
          <SubBoxTitle>年度最強合作</SubBoxTitle>
          <SubBoxTitleBg>三大主題來襲</SubBoxTitleBg>
          <SubBoxText>各路廠商強強聯手！</SubBoxText>
          <SubBoxText>共同設計出接地氣的網頁互動挑戰關卡</SubBoxText>
          <SubBoxSnowImg src="./images/green-snow.png" alt="green-snow" />
        </SubBox>
      </CircleSub>

      <StartLoopText className="start-loop-text">
        {[...Array(3)].map((_, idx: number) => (
          <p key={idx}>
            {[...Array(8)].map((__, i: number) => (
              <span key={i}>THEF2E</span>
            ))}
          </p>
        ))}
      </StartLoopText>

    </StartBlock>
  )
}
export default Start
