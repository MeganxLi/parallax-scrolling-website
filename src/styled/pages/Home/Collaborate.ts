import { styled } from '@linaria/react'

// import { rwd } from '../../util/Mixins'
import colors from '../../util/Variables'

export const CollaborateBlock = styled.div`
 background-color: ${colors.orange[1]};
 padding-top: 140px;
 padding-bottom: 350px;
`

export const CollaborateTitle = styled.div`
  color: ${colors.white};
  font-size: 52px;
  display: flex;
  align-items: center;
  font-family: 'GenSenRounded-H';
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 150px;
`

export const CollaborateContainer = styled.div`
  display: flex;
`

export const CollaborateItem = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
