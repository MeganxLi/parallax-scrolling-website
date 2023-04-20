import { styled } from '@linaria/react'

import { rwd } from '../util/Mixins'
import colors from '../util/Variables'

/* -- Banner --*/
export const BannerBlock = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const hoverBannerTittle = `
  p{
    background-color: ${colors.white};
    top: 13rem;
    ${rwd('md')} {
    top: 9rem;
    }
  }

  h2::after{
    color: ${colors.white};
    -webkit-text-stroke: 2px ${colors.black[900]};
    top: -5px;
    left: 5px;
  }
`

export const BannerTittle = styled.div`
  width: max-content;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 70%);
  transform-origin: (0,0);
  font-family: 'GenSenRounded-H';
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;

  &::after{
    content: ""; 
    position: absolute; 
    z-index: -1;
    top: 130px;
    left: 5px;
    background-image: url("./images/home-title-bg.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    height: 260px;
  }

  h5{
    font-size: 40px;
    color: transparent;
    -webkit-text-stroke: 2px ${colors.black[900]};
    ${rwd('md')} {
      font-size: 28px;
    }
  }

  h2{
    font-size: 80px;
    color: transparent;
    -webkit-text-stroke: 2px ${colors.black[900]};
    position: relative;

    ${rwd('md')} {
      font-size: 50px;
    }

    &::after{
      content: attr(data-clone);
      color: ${colors.orange[3]};
      -webkit-text-stroke: 2px ${colors.black[900]};
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      transition: all .1s;
    }
  }

  h3{
    font-size: 52px;
    margin-top: 16px;

    ${rwd('md')} {
      font-size: 32px;
    }
  }

  p{
    font-family: 'GenSenRounded-M';
    font-size: 32px;
    padding: 10px 0px;
    position: absolute;
    top: 12.5rem;
    width: max-content;

    ${rwd('md')} {
      font-size: 24px;
      top: 8.5rem;
    }
  }

  &:hover{
   ${hoverBannerTittle}
  }

  ${rwd('md')} {
    ${hoverBannerTittle}
  }
`
const hoverSignUpButton = `
  box-shadow: 6px 6px 0px ${colors.black.core}; 
`

export const SignUpButton = styled.button`
  font-family: 'GenSenRounded-M';
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, 0%);
  transform-origin: (0,0);
  background: ${colors.white};
  border: 1px solid ${colors.black.core};
  border-radius: 2px;
  color: ${colors.black.core};
  font-weight: 900;
  font-size: 20px;
  padding: 10px;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;
  z-index: 5;

  &:hover{
    ${hoverSignUpButton}
  }

  ${rwd('md')} { 
    ${hoverSignUpButton}
    bottom: 10%;
  }
`

export const RectangleTop = styled.img`
  position: absolute;
  left: 10%;
  right: 48.1%;
  top: 3%;
  width: 220px;

  ${rwd('md')} { 
    display: none;
  }
`

export const RectangleRight = styled.img`
  position: absolute;
  right: -10%;
  bottom: 40%;
  width: 220px;

  ${rwd('md')} { 
    bottom: -5%;
  }
`

export const StarLeft = styled.img`
  position: absolute;
  left: 10%;
  top: 40%;
  transform: rotate(325deg);
  z-index: -1;
  
  ${rwd('md')} { 
    left: -100px;
    top: auto;
    bottom: 20%;
  }
`

export const StarRight = styled.div`
  position: absolute;
  right: 20%;
  top: 10%;
  z-index: -1;

  span {
    font-family: 'Georama';
    font-weight: 800;
    font-size: 52px;
    font-style: italic;
    line-height: 62px;
    letter-spacing: 0.15em;
    color: ${colors.black.core};
    position: absolute;
    left: 35%;
    top: 10%;
    white-space: nowrap;

    ${rwd('lg')} { 
      display: none;
    }
  }

  ${rwd('md')} { 
    transform: rotate(325deg);
    right: -100px;
    top: 50%;
  }
`

export const FrontEnd = styled.p`
  font-family: 'Georama';
  font-style: italic;
  font-weight: 800;
  font-size: 52px;
  line-height: 62px;
  color: ${colors.black.core};
  position: absolute;
  left: 10%;
  bottom: 10%;

  ${rwd('md')} { 
    display: none;
  }
`

export const HouseImg = styled.div`
  position: absolute; 
  top: 50%;
  left: 20%;
  background-image: url("./images/house.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 350px;
  height: 285px;

  &:hover {
    background-image: url("./images/house-hover.png");
  }

  ${rwd('lg')} { 
    background-image: url("./images/house-hover.png");
    width: 190px;
    height: 160px;
  }
`

export const FlyImg = styled.div`
  position: absolute; 
  top: 50%;
  right: 10%;
  background-image: url("./images/fly.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 275px;
  height: 220px;

  &:hover {
    background-image: url("./images/fly-hover.png");
  }

  ${rwd('lg')} { 
    background-image: url("./images/FlyHover.png");
    top: 70%;
    width: 200px;
    height: 113px;
  }
`
/* -- Question --*/
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
export const LoopText = styled.span`
  font-family: 'GenSenRounded-H';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-weight: 900;
  font-size: 80px;
  white-space: nowrap;
  color: ${colors.white};

  ${rwd('md')} { 
    display: none;
  } 
`

/* -- Start --*/
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
