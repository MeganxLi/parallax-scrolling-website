import { styled } from '@linaria/react'

import { rwd } from '../../util/Mixins'
import colors from '../../util/Variables'

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
    background-image: url("/images/home-title-bg.png");
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
  background-image: url("/images/house-img.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 350px;
  height: 285px;

  &:hover {
    background-image: url("/images/house-hover.png");
  }

  ${rwd('lg')} { 
    background-image: url("/images/house-hover.png");
    width: 190px;
    height: 160px;
  }
`

export const FlyImg = styled.div`
  position: absolute; 
  top: 50%;
  right: 10%;
  background-image: url("/images/fly.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 275px;
  height: 220px;

  &:hover {
    background-image: url("/images/fly-hover.png");
  }

  ${rwd('lg')} { 
    background-image: url("/images/fly-hover.png");
    top: 70%;
    width: 200px;
    height: 113px;
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
