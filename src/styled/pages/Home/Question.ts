import { styled } from '@linaria/react'

import { rwd } from '../../util/Mixins'
import colors from '../../util/Variables'

export const QuestionBlock = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  &::after, &::before{
    content: "";
    background-color: ${colors.yellow[2]};
    width: 100%;
    height: 80px;
    display: block;

    ${rwd('md')} {
      height: 24px;
    }
  }
`

export const QuestionCarousel = styled.div`
  height: calc(100vh - 110px * 2);
  background-color: ${colors.white};
  padding: 30px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 100px;

  ${rwd('md')} {
    padding: 0;
    height: calc(100vh - 24px * 2);
    grid-template-rows: repeat(6, max-content);
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`

export const QuestionCarouselIndicators = styled.div`
  display: flex;
  gap: 145px;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;

  span{
    width: 33px;
    height: 33px;
    border: none;
    background-color: ${colors.black[400]};
    border-radius: 50px;
    cursor: pointer;

    &.active{
      background-color: ${colors.yellow[1]};
    }
    
    ${rwd('md')} {
      width: 12px;
      height: 12px;
    }
  }

  ${rwd('md')} {
    gap: 40px;
    grid-column-end: 1;
    margin-top: 2rem;
  }
`

export const QuestionCarouselItem = styled.div<CarouselProps>`
  font-family: 'GenSenRounded-M';
  font-weight: 900;
  font-size: 52px;
  line-height: 52px;
  text-align: center;
  background-color:${({ color }) => color};
  border-radius: 20px;
  color: ${colors.white};
  padding: 24px;
  box-shadow: 15px 15px 0px 1px ${({ boxColor }) => boxColor};

  ${rwd('xl')} {
    font-size: 30px;
    line-height: 30px;
  }

  ${rwd('md')} {
    font-size: 24px;
    line-height: 24px;
    width: 230px;
    grid-row-start: ${({ order }) => order + 1};
    grid-row-end: ${({ order }) => order + 1};
  }
`

export const QuestionMark = styled.img`
  position: absolute;
  bottom: 7rem;
  right: 3rem;

  ${rwd('md')} {
    width: 132px;
    bottom: 4rem;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`
