import {
  ActivityBlock, ActivityContent, ActivityItemContent, ActivityItemSub, ActivityItemTitle,
  GameStartText,
  GreenSmile,
  GreenSmileImg,
  GreenSmileText,
  LiveText,
  SignUpText, StarImgBottom, StarImgTop, WhiteLine, WorkText,
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
      <StarImgTop src="./images/star.png" alt="Star" />
      <SignUpText>
        <ActivityItemTitle>報名時間</ActivityItemTitle>
        <ActivityItemSub>SING UP</ActivityItemSub>
        <ActivityItemContent>
          開放報名
          <br />
          10/13(四) 早上 11:00 - 11/6(日) 晚上 23:59
        </ActivityItemContent>
      </SignUpText>
      <GameStartText>
        <ActivityItemTitle>比賽開始</ActivityItemTitle>
        <ActivityItemSub>STAR</ActivityItemSub>
        <ActivityItemContent>
          各組別開賽
          <br />
          10/31(一) UI組、團體組開賽
          <br />
          11/7 (一）前端組開賽
        </ActivityItemContent>
      </GameStartText>
      <WorkText>
        <ActivityItemTitle>登陸作品</ActivityItemTitle>
        <ActivityItemSub>UPLOAD</ActivityItemSub>
        <ActivityItemContent>
          10/31(一) 中午 12:00 -
          <br />
          11/28(一) 中午 12:00
        </ActivityItemContent>
      </WorkText>
      <LiveText>
        <ActivityItemTitle>線上直播</ActivityItemTitle>
        <ActivityItemSub>STREAM</ActivityItemSub>
        <ActivityItemContent>
          11/3 - 11/24（每週四）
        </ActivityItemContent>
      </LiveText>
      <StarImgBottom src="./images/star.png" alt="Star" />
    </ActivityContent>

  </ActivityBlock>
)

export default Activity
