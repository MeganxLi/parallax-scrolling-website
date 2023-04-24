import { styled } from '@linaria/react'

import colors from '../../util/Variables'

export const StartBlock = styled.div`
  position: relative;
  background-color: ${colors.green[3]};
  height: 2080px;
  overflow: hidden;
`

export const StartLoopText = styled.div`
  font-family: 'GenSenRounded-H';
  white-space: nowrap;
  font-size: 80px;  
  color: transparent;

  &:last-child{
    position: absolute;
    bottom: 0;
  }

  span{
    margin-right: 0.5rem;
  }

  p{
    &:nth-child(odd){
      span:nth-child(odd){
        -webkit-text-stroke: 2px ${colors.white};
      }

      span:nth-child(even){
        color: ${colors.white}; 
      }
    }

    &:nth-child(even){
      span:nth-child(odd){
        color: ${colors.white}; 
      }

      span:nth-child(even){
        -webkit-text-stroke: 2px ${colors.white};
      }
    }
  }
`

const CircleStyled = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`

export const CircleMain = styled(CircleStyled)`
  background-color: ${colors.orange[3]};
  top: 10.9rem;
  width: 1800px;
  height: 1800px;
  z-index: 3;
`

export const CircleMainTitle = styled.div`
  position: relative;
  margin-top: 19.5rem;
  margin-bottom: 10rem;
  width: 100%;

  img, h3{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  h3{
    font-family: 'GenSenRounded-H';
    font-weight: 900;
    font-size: 80px;
    text-align: center;
    letter-spacing: 0.15em;
    color: ${colors.black[800]};    
    width: 100%;
  }
`

export const CircleMainBox = styled.div`
  width: auto;
  display: grid;
  align-items: center;
  justify-items: end;
  grid-template-columns: 40rem repeat(2,min-content);
  grid-template-rows: repeat(2,1fr);
  column-gap: 1rem;

  .circle-main-tag-build-good{
    grid-area: 2 / 1 / 4 / 4;
  }
`

export const CircleMainItem1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  p {
      font-family: 'Georama';
      font-size: 40px;
      letter-spacing: 0.15em;
  }

  .circle-main-title-ui{
    margin-left: 2rem;
  }

  .circle-main-title-front-end{
    margin-right: 2rem;
  }
  
`

export const GreenSnow = styled.img`    
  position: absolute;
  top: 45rem;
  left: 11rem;
`

export const CircleSub = styled(CircleStyled)`
  background-color: ${colors.orange[1]};
  width: 1400px;
  height: 1400px;
  top: 70rem;
  z-index: 4;
`
export const SubBox = styled.div`
  display: grid;
  justify-items: start;
  margin-top: 15rem;
  font-family: 'GenSenRounded-H';
  position: relative;
  gap: 1rem;
`
export const SubBoxTitle = styled.p`
  font-weight: 900;
  font-size: 80px;
  letter-spacing: 0.15em;
  color: ${colors.white};
  padding: 10px;
`

export const SubBoxTitleBg = styled(SubBoxTitle)`
  background-color: ${colors.black[800]};
  margin-bottom: 2rem;
`

export const SubBoxText = styled.p` 
  font-weight: 900;
  font-size: 40px;
  color: ${colors.white};
`

export const SubBoxStarImg = styled.img`
  transform:rotate(325deg);
  position: absolute;
  top: -2.5rem;
  left: -4.5rem;
  z-index: -1;
`

export const SubBoxSnowImg = styled.img`
  position: absolute;
  bottom: -6.5rem;
  right: -8.5rem;
  z-index: -1;
`
