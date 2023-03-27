import { styled } from '@linaria/react'

import { rwd } from '../util/Mixins'
import colors from '../util/Variables'

export const LoadingPage = styled.div`
  background-color: ${colors.orange[1]};
  width: 100vw;
  height: 100vh;
`

export const LoadingBlack = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 650px;
`

export const LoadingImg = styled.img<LoadingProps>`
  position: absolute;
  top: ${(props) => (props.move !== 100 ? -100 : -140)}px;
  width: auto;
  max-width: 105px;
  left:  ${(props) => (props.move !== 100 ? props.move : '')}%;
  right:  ${(props) => (props.move !== 100 ? '' : '0')};
  
  ${rwd('md')} {
    max-width: 60px;
  }
`

export const ProgressBar = styled.div`
  width: 100%;
  height: 25px;
  border-radius: 20px;
  background-color: ${colors.white};
  ${rwd('md')} {
    height: 16px;
  }
  ${rwd('2xs')} {
    height: 12px;
  }
`

export const Bar = styled.div<LoadingProps>`  
  background-color: ${colors.green[1]};
  height: 100%;
  width: ${(props) => props.move}%;
  border-radius: 20px;
 `

export const BarText = styled.p`
  font-family: 'Georama';
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.15em;
  margin-top: 1rem;
  ${rwd('md')} {
    font-size: 16px;
  }
`
