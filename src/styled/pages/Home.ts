import { styled } from '@linaria/react'

import { rwd } from '../util/Mixins'
import colors from '../util/Variables'

export const BannerBlock = styled.div`
  position: relative;
  height: 100vh;

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

  &:hover{
    ${hoverSignUpButton}
  }

  ${rwd('md')} { 
    ${hoverSignUpButton}
  }
`