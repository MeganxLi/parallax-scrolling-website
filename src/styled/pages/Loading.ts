import { styled } from '@linaria/react'

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

export const ProgressBar = styled.div`
  width: 100%;
  height: 1.5rem;
  border-radius: 20px;
  background-color: ${colors.white};
`

export const Bar = styled.div<BarProps>`  
  background-color: ${colors.green[1]};
  height: 100%;
  width: ${(props) => props.width}%;
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
`
