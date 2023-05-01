import { styled } from '@linaria/react'

import colors from '../../util/Variables'

export const ActivityBlock = styled.div`
  position: relative;
  overflow: hidden;
  height: 2745px;
`

export const ActivityItemTitle = styled.h5`
  font-family: 'GenSenRounded-H';
  font-weight: bold;
  font-size: 60px;
  color: ${colors.black.core};
`

export const ActivityItemSub = styled.p`
  font-family: 'Georama';
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: ${colors.green[1]};
`

export const ActivityItemContent = styled.p`  
  font-family: 'GenSenRounded-M';
  font-weight: bold;
  font-size: 44px;
  color: ${colors.black.core};
  margin-left: 8rem;
`

export const ActivityContent = styled.div`
  position: absolute;
  z-index: 5;
`

export const SignUpText = styled.div``
export const GameStartText = styled.div``
export const WorkText = styled.div``
export const LiveText = styled.div``

export const WhiteLine = styled.img`
  position: absolute;
  z-index: 1;
`

export const GreenSmile = styled.div`
  position: absolute;
  z-index: 2;
  /* left: -20rem; */
  width: 1800px;
  height: 1800px;
  background-color: ${colors.green[1]};
  border-radius: 50%;
  left: -46rem;
  top: 30rem;
  transform: rotate(0deg);
`

export const GreenSmileImg = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(100%,100%);

  i {
    display: block;
    width: 65px;
    height: 65px;
    background-color: ${colors.white};
    border-radius: 50%;

    &:nth-child(1) {
      transform: translate(180%,0%);
    }

    &:nth-child(2) {
      transform: translate(-25%,40%);
    }
  }

  img {
    transform: rotate(276deg);
  }
`

export const GreenSmileText = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(0, 20%);

  span {
    font-family: 'GenSenRounded-H';
    font-size: 80px;
    color: ${colors.white};
    display: block;

    &:nth-child(1){
      transform: rotate(3deg);
    }
    &:nth-child(2){
      transform: rotate(11deg) translate(78px,-86px);
    }
    &:nth-child(3){
      transform: rotate(25deg) translate(115px,-192px);
    }
    &:nth-child(4){
      transform: rotate(38deg) translate(119px,-290px);
    }
  }
`
