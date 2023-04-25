import { styled } from '@linaria/react'

import { rwd } from '../../util/Mixins'
import colors from '../../util/Variables'

export const StartBlock = styled.div`
  position: relative;
  background-color: ${colors.green[3]};
  height: 2080px;
  overflow: hidden;

  ${rwd('lg')} { 
    height: 1600px;
  }

  ${rwd('md')} {
    max-height: 100vh;
  }
`

export const TextSize = `
  ${rwd('lg')} { 
    font-size: 60px; 
  }

  ${rwd('md')} { 
    font-size: 40px;  
  }

  ${rwd('xs')} { 
    font-size: 16px;  
  }
`

export const StartLoopText = styled.div`
  font-family: 'GenSenRounded-H';
  white-space: nowrap;
  font-size: 80px;  
  color: transparent;
  ${TextSize}

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

  ${rwd('lg')} { 
  width: 1400px;
  height: 1400px;
  }


  ${rwd('md')} { 
    width: 95vw;
    height: 95vw;
    top: 10%;
  }
`

export const CircleMainTitle = styled.div`
  position: relative;
  margin-top: 19.5rem;
  margin-bottom: 10rem;
  width: 100%;

  ${rwd('lg')} { 
    margin-top: 15%;
    margin-bottom: 15%;;
  }


  img, h3{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    ${rwd('lg')} { 
      width: 57%;
    }
  }

  h3{
    font-family: 'GenSenRounded-H';
    font-weight: 900;
    font-size: 80px;
    text-align: center;
    letter-spacing: 0.15em;
    color: ${colors.black[800]};    
    width: 100%;
    padding: 10px;

    ${TextSize}
  }
`

export const CircleMainBox = styled.div`
  width: auto;
  display: grid;
  align-items: center;
  justify-items: end;
  grid-template-columns: 40rem repeat(2,min-content);
  grid-template-rows: 1fr min-content;
  gap: 1.5rem;

  ${rwd('lg')} { 
    width: 90vw;
    grid-template-columns: 28rem 2fr 1fr;
    gap: 2rem;

    img{
      width: 100%;
    }
  }

  ${rwd('md')} {
    width: 80vw;
    grid-template-columns: 8fr 2fr 1fr;
    gap: 0.5rem;
  }

  .circle-main-tag-build-good{
    grid-area: 2 / 1 / 4 / 4;
  }

  .circle-main-title{
    ${rwd('lg')} { 
      font-size: 28px;
    }

    ${rwd('sm')} { 
      font-size: 12px;
      padding: 6px;
    }
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

  img{
    ${rwd('lg')} {
      width: 50%;
    }
  }
  
`

export const GreenSnow = styled.img`    
  position: absolute;
  top: 40%;
  left: 11rem;
  z-index: -1;

  ${rwd('lg')} { 
    width: 100px;
    left: 18rem;
  }

  ${rwd('md')} { 
    width: 52px;
    left: 8%;
    top: 60%;
  }
`

export const CircleSub = styled(CircleStyled)`
  background-color: ${colors.orange[1]};
  width: 1400px;
  height: 1400px;
  top: 70rem;
  z-index: 4;

  ${rwd('lg')} {
    top: 55rem;
  }

  ${rwd('md')} {
    top: 42rem;
    width: 80vw;
    height: 80vw;
  }

  ${rwd('xs')} {
    top: 20rem;
  }
`
export const SubBox = styled.div`
  display: grid;
  justify-items: start;
  margin-top: 15rem;
  font-family: 'GenSenRounded-H';
  position: relative;
  gap: 1rem;

  ${rwd('md')} {
    margin-top: 10rem;
    gap: 12px;
  }

  ${rwd('xs')} {
    margin-top: 3rem;
    gap: 4px;
  }
`

export const SubBoxTitle = styled.p`
  font-weight: 900;
  font-size: 80px;
  letter-spacing: 0.15em;
  color: ${colors.white};
  padding: 10px;
  ${TextSize}
`

export const SubBoxTitleBg = styled(SubBoxTitle)`
  background-color: ${colors.black[800]};
  margin-bottom: 2rem;
  ${TextSize}

  ${rwd('md')} {
    margin-bottom: 0.5rem;
  }
`

export const SubBoxText = styled.p` 
  font-weight: 900;
  font-size: 40px;
  color: ${colors.white};

  ${rwd('lg')} { 
    font-size: 28px; 
  }

  ${rwd('md')} { 
    font-size: 12px;  
  }
`

export const SubBoxStarImg = styled.img`
  transform:rotate(325deg);
  position: absolute;
  top: -2.5rem;
  left: -4.5rem;
  z-index: -1;

  ${rwd('lg')} { 
    width: 120px;
    top: -1rem;
    left: -2.5rem;
  }

  ${rwd('md')} { 
    width: 70px;
    top: -1rem;
    left: -1rem;
  }
`

export const SubBoxSnowImg = styled.img`
  position: absolute;
  bottom: -6.5rem;
  right: -8.5rem;
  z-index: -1;

  ${rwd('lg')} { 
    width: 100px;
    bottom: -1rem;
    right: -2.5rem;
  }

  ${rwd('md')} { 
    width: 52px;
  }
`
