import { styled } from '@linaria/react'

import { rwd } from '../util/Mixins'
import colors from '../util/Variables'

export const BannerBlock = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  &::after{
    content: ""; 
	  position: absolute; 
    z-index: -1;
    bottom: 0;
    left: 0;
    background-image: url("./images/THEF2E.png");
    background-size: contain;
    background-repeat: space no-repeat;
    background-size: 205px auto;
    height: 50px;
    width: 100%;
  }

  ${rwd('md')} { 
    &::after{
      background-image: none;
    }
  }
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
    background-image: url("./images/HomeTitleBg.png");
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
  background-image: url("./images/House.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 350px;
  height: 285px;

  &:hover {
    background-image: url("./images/HouseHover.png");
  }

  ${rwd('lg')} { 
    background-image: url("./images/HouseHover.png");
    width: 190px;
    height: 160px;
  }
`

export const FlyImg = styled.div`
  position: absolute; 
  top: 50%;
  right: 10%;
  background-image: url("./images/Fly.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 275px;
  height: 220px;

  &:hover {
    background-image: url("./images/FlyHover.png");
  }

  ${rwd('lg')} { 
    background-image: url("./images/FlyHover.png");
    top: 70%;
    width: 200px;
    height: 113px;
  }
`


export const QuestionBlock = styled.div`
  position: relative;
  height: 100vh;

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
  grid-template-rows: 1fr 3fr;
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

  button{
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
  transform: translate(0%, ${({ order }) =>
    order === 1 ?
      '-20vh' :
      order === 2 ?
        '-10vh' :
        '0'});

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