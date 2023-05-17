import { ReactComponent as StarIcon } from '../../assets/svg/star.svg'
import CollaborateList from '../../constants/CollaborateList'
import {
  CollaborateBlock, CollaborateContainer, CollaborateItem, CollaborateTitle,
} from '../../styled/pages/Home/Collaborate'

const Collaborate = () => (
  <CollaborateBlock>
    <CollaborateTitle>
      <StarIcon />
      <span>本次活動贊助單位</span>
      <StarIcon />
    </CollaborateTitle>
    <CollaborateContainer>
      {
        CollaborateList.map((item: CollaborateListType) => (
          <CollaborateItem key={item.title}>
            <img src={item.src} alt={item.title} />
          </CollaborateItem>
        ))
      }
    </CollaborateContainer>
  </CollaborateBlock>
)

export default Collaborate
