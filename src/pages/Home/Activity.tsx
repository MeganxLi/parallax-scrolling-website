import ActivityContentList from '../../constants/ActivityList'
import {
  ActivityBlock,
  ActivityContent,
  ActivityItem,
  ActivityItemContent,
  ActivityItemSub,
  ActivityItemTitle,
  GreenSmile,
  GreenSmileImg,
  GreenSmileText,
  GreenSnow, StarImgBottom, StarImgTop, WhiteLine,
} from '../../styled/pages/Home/Activity'

const Activity = () => (
  <ActivityBlock>
    <WhiteLine src="./images/white-line.png" alt="white line" />
    <GreenSmile>
      <GreenSmileImg>
        <i />
        <i />
        <img src="./images/smile-line.png" alt="smile line" />
      </GreenSmileImg>
      <GreenSmileText>
        <span>挑</span>
        <span>戰</span>
        <span>流</span>
        <span>程</span>
      </GreenSmileText>
    </GreenSmile>
    <ActivityContent>
      <StarImgTop src="./images/star-img.png" alt="Star" />
      {ActivityContentList.map((item: ActivityContentListType) => (
        <ActivityItem className={item.class_name} key={item.title}>
          <ActivityItemTitle>{item.title}</ActivityItemTitle>
          <ActivityItemSub>{item.sub}</ActivityItemSub>
          <ActivityItemContent>{item.content}</ActivityItemContent>
        </ActivityItem>
      ))}
      <StarImgBottom src="./images/star-img.png" alt="Star" />
      <GreenSnow src="./images/green-snow.png" alt="green snow" />
    </ActivityContent>
  </ActivityBlock>
)

export default Activity
