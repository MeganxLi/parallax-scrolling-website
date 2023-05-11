import {
  ContestBlock, ContestCard, ContestCardContent, ContestCardTitle, ContestTitle,
  ContestButton, ContestPoint,
} from '../../styled/pages/Home/Contest'

const Contest = () => (
  <ContestBlock>
    <ContestTitle>區區修煉已經無法滿足了嗎？還有比賽等著你！</ContestTitle>
    <ContestPoint />
    <ContestCard>
      <ContestCardTitle>評審機制</ContestCardTitle>
      <ContestCardContent>
        <p>初選</p>
        <span>將由六角學院前端、UI 評審進行第一波篩選。</span>
        <p>決選</p>
        <span>由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！</span>
      </ContestCardContent>
    </ContestCard>
    <ContestPoint />
    <ContestCard>
      <ContestCardTitle>比賽獎項</ContestCardTitle>
      <ContestCardContent>
        <ol>
          <li>初選佳作 共六十位 數位獎狀</li>
          <li>個人企業獎 共六位 NTD 3,000/位</li>
          <li>團體企業獎 共三組 NTD 10,000/組</li>
          <li>以上皆提供完賽數位獎狀</li>
        </ol>
      </ContestCardContent>
    </ContestCard>
    <ContestPoint />
    <ContestButton>立即報名!</ContestButton>
  </ContestBlock>
)

export default Contest
