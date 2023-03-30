import { styled } from '@linaria/react'

import { rwd } from '../util/Mixins'
import colors from '../util/Variables'

export const BannerBlock = styled.div`
  position: relative;
  height: 100vh;
`

export const BannerTittle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'GenSenRounded-H';
  display: flex;
  flex-direction: column;
  align-items: center;

  h5{
    font-size: 40px;
    color: transparent;
    -webkit-text-stroke: 2px ${colors.black[900]};
  }

  h2{
    font-size: 80px;
    color: transparent;
    -webkit-text-stroke: 2px ${colors.black[900]};
    position: relative;

    &::after{
      content: attr(data-clone);
      color: ${colors.orange[3]};
      -webkit-text-stroke: 2px ${colors.black[900]};
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      transition: all .3s;
    }
  }

  h3{
    font-size: 52px;
    margin-top: 16px;
  }

  p{
    font-family: 'GenSenRounded-M';
    font-size: 32px;
    margin-top: 16px;
  }

  &:hover, .banner-hover{
    p{
      background-color: ${colors.white};
      padding: 10px 0px;
    }

    h2::after{
      color: ${colors.white};
      -webkit-text-stroke: 2px ${colors.black[900]};
      top: -5px;
      left: 5px;
    }
  }
`