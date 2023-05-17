import { ReactComponent as RightArrowIcon } from '../../assets/svg/right_arrow.svg'
import { ReactComponent as StarIcon } from '../../assets/svg/star.svg'
import ResolveList from '../../constants/ResolveList'
import {
  ResolveBlock,
  ResolveBody,
  ResolveHeader,
  ResolveItemButton,
  ResolveItemContent,
  ResolveItemSub,
  ResolveItemTag,
  ResolveItemTitle,
  ResolveSection,
  ResolveStar1,
  ResolveStar2,
  ResolveTitleBlock,
} from '../../styled/pages/Home/Resolve'

const Resolve = () => (
  <ResolveBlock>
    <ResolveHeader>
      <ResolveStar1><StarIcon /></ResolveStar1>
      <ResolveStar2><StarIcon /></ResolveStar2>
      <ResolveTitleBlock>
        {ResolveList.map((item) => (
          <ResolveItemTitle key={item.week} color={item.color} className={item.week === 1 ? 'active' : ''}>
            {`Week${item.week}`}
          </ResolveItemTitle>
        ))}
      </ResolveTitleBlock>
    </ResolveHeader>
    <ResolveBody>
      {ResolveList.map((item) => (
        <ResolveSection key={item.week} className={item.week === 1 ? 'active' : ''}>
          <ResolveItemSub>
            {`/ ${item.title} /`}
          </ResolveItemSub>
          {item.tag.map((tag) => (
            <ResolveItemTag key={tag} color={item.color}>{`#${tag}`}</ResolveItemTag>
          ))}
          <ResolveItemContent>
            各組別投稿時間
            <br />
            UI 組投稿區間：
            {item.ui_time}
            <br />
            前端組投稿區間：
            {item.font_time}
          </ResolveItemContent>
          <ResolveItemButton>
            更多關卡資訊
            <RightArrowIcon />
          </ResolveItemButton>
        </ResolveSection>
      ))}
    </ResolveBody>
  </ResolveBlock>
)

export default Resolve
