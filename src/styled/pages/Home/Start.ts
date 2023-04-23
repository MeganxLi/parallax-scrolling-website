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

export const CircleWhite = styled.div`
  border-radius: 50%;
  background-color: ${colors.orange[3]};
  width: 1800px;
  height: 1800px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 10.9rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 3;
`

export const CircleWhiteTitle = styled.div`
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

export const CircleWhiteMain = styled.div`
  width: auto;
  display: grid;
  align-items: center;
  justify-items: end;
  grid-template-columns: 40rem repeat(2,min-content);
  grid-template-rows: repeat(2,1fr);
  column-gap: 1rem;

  .build-good{
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

  .ui{
    margin-left: 2rem;
  }

  .front-end{
    margin-right: 2rem;
  }
  
`

export const GreenSnow = styled.img`    
  position: absolute;
  top: 45rem;
  left: 11rem;
`
