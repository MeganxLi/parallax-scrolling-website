import { styled } from '@linaria/react'

import { rwd } from '../../util/Mixins'
import colors from '../../util/Variables'

export const ActivityBlock = styled.div`
  position: relative;
  overflow: hidden;
  height: 2800px;

  ${rwd('xl')}{
    height: 2400px;
  }

  ${rwd('lg')}{
    height: 1400px;
  }

  ${rwd('sm')}{
    height: 700px;
  }

`

export const TitleText = `
  font-weight: bold;
  font-size: 60px;

  ${rwd('2xl')}{
    font-size: 48px;
  }

  ${rwd('xl')}{
    font-size: 32px;
  }

  ${rwd('md')}{
    font-size: 20px;
  }

  ${rwd('sm')}{
    font-size: 12px;
  }
`

export const ActivityItemTitle = styled.h5`
  font-family: 'GenSenRounded-H';
  color: ${colors.black.core};

  ${TitleText}
`

export const ActivityItemSub = styled.p`
  font-family: 'Georama';
  letter-spacing: 0.15em;
  color: ${colors.green[1]};
  margin-top: 10px;

  ${TitleText}

  ${rwd('sm')}{
    margin-top: 4px;
  }
`

export const ActivityItemContent = styled.p`  
  font-family: 'GenSenRounded-M';
  font-weight: bold;
  font-size: 44px;
  color: ${colors.black.core};
  margin-top: 1.5rem;
  margin-left: 8rem;

  ${rwd('2xl')}{
    font-size: 32px;
  }

  ${rwd('xl')}{
    margin-top: 10px;
    font-size: 24px;
    margin-left: 5rem;
  }

  ${rwd('md')}{
    margin-top: 10px;
    font-size: 18px;
    margin-left: 3rem;
  }

  ${rwd('sm')}{
    margin-top: 8px;
    font-size: 12px;
    margin-left: 2rem;
  }

`

export const ActivityContent = styled.div`
  position: absolute;
  z-index: 5;
`

export const SignUpText = styled.div`
  margin-top: 24rem;
  margin-left: 40rem;

  ${rwd('2xl')}{
    margin-left: 28rem;
  }

  ${rwd('xl')}{
    margin-left: 20rem;
  }

  ${rwd('lg')}{
    margin-top: 14rem;
    margin-left: 13rem;
  }

  ${rwd('sm')}{
    margin-top: 8rem;
    margin-left: 6rem;
  }
`

export const GameStartText = styled.div`
  margin-top: 24rem;
  margin-left: 68rem;

  ${rwd('2xl')}{
    margin-top: 20rem;
    margin-left: 50rem;
  }

  ${rwd('xl')}{
    margin-top: 12rem;
    margin-left: 38rem;
  }

  ${rwd('lg')}{
    margin-top: 11rem;
    margin-left: 26rem;
  }

  ${rwd('sm')}{
    margin-top: 5rem;
    margin-left: 12rem;
  }
`

export const WorkText = styled.div`
  margin-top: 34rem;
  margin-left: 64rem;

  ${rwd('2xl')}{    
    margin-top: 20rem;
    margin-left: 46rem;
  }

  ${rwd('xl')}{    
    margin-top: 22rem;
    margin-left: 38rem;
  }

  ${rwd('lg')}{    
    margin-top: 9rem;
    margin-left: 24rem;
  }

  ${rwd('sm')}{    
    margin-top: 6rem;
    margin-left: 12rem;
  }
`

export const LiveText = styled.div`
  margin-top: 14rem;
  margin-left: 36rem;

  ${rwd('2xl')}{
    margin-top: 14rem;
    margin-left: 24rem;
  }

  ${rwd('xl')}{    
    margin-top: 12rem;
    margin-left: 18rem;
  }
  
  ${rwd('lg')}{    
    margin-top: 4rem;
    margin-left: 10rem;
  }

  ${rwd('sm')}{    
    margin-top: 3rem;
    margin-left: 7rem;
  }
`

export const WhiteLine = styled.img`
  position: absolute;
  z-index: 1;

  ${rwd('2xl')}{
    top: 10rem;
    width: 1100px;
  }

  ${rwd('xl')}{
    top: 12rem;
    width: 900px;
  }

  ${rwd('lg')}{
    top: 7rem;
    width: 600px;
  }

  ${rwd('sm')}{
    top: 76px;
    width: 300px;
  }
`

export const GreenSmile = styled.div`
  position: absolute;
  z-index: 2;
  width: 1800px;
  height: 1800px;
  background-color: ${colors.green[1]};
  border-radius: 50%;
  left: -46rem;
  top: 30rem;
  transform: rotate(0deg);

  ${rwd('2xl')}{
    left: -40rem;
    width: 1400px;
    height: 1400px;
  }

  ${rwd('xl')}{
    left: -26rem;
    width: 1000px;
    height: 1000px;
  }

  ${rwd('lg')}{
    top: 19rem;
    left: -20rem;
    width: 700px;
    height: 700px;
  }

  ${rwd('sm')}{
    top: 10rem;
    left: -14rem;
    width: 400px;
    height: 400px;
  }
`

export const GreenSmileImg = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(100%,100%);

  ${rwd('xl')}{
    transform: translate(50%,50%) scale(0.7);
  }

  ${rwd('sm')}{
    transform: translate(10%,-10%) scale(0.2);
  }

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

  ${rwd('xl')}{
    transform: scale(0.7);
  }

  ${rwd('lg')}{
    transform: scale(0.4);
  }

  ${rwd('sm')}{
    transform: translate(0, -25%) scale(0.2);
  }

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

export const StarImg = styled.img`
  position: absolute;

  ${rwd('lg')}{
    width: 150px;
  }

  ${rwd('md')}{
    width: 100px;
  }

  ${rwd('sm')}{
    width: 60px;
  }
`

export const StarImgTop = styled(StarImg)`
  top: 10rem;
  right: 20%;

  ${rwd('sm')}{
    top: 3rem;
  }

`

export const StarImgBottom = styled(StarImg)`
  bottom: -8rem;
  left: 5%;

  ${rwd('sm')}{
    bottom: -3rem;
  }
`

export const GreenSnow = styled(StarImg)`
  bottom: 5rem;
  right: 0;

`
