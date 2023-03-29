import { styled } from '@linaria/react'
import { rwd } from '../util/Mixins'

import colors from '../util/Variables'

export const Header = styled.header`
  background: ${colors.white};
  color: ${colors.green[1]};
  padding: 10px 32px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.black.core};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

export const HeaderTitle = styled.h3`
  font-size: 24px;
  flex: none;
  margin-right: auto;
  font-family: 'GenSenRounded-H';
`

export const Nav = styled.nav`
  font-size: 16px;
  font-weight: 900;

  ul{
    display: flex;
    gap: 16px;
  }
  
  li{
    font-family: 'GenSenRounded-M';
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;

    &:last-child{
     background-color: ${colors.green[1]};
     color: ${colors.white};
    }
  }
`

export const HeaderNav = styled(Nav)`
  display:block;

  ${rwd('lg')} {
    display: none;
  }
`

export const MenuButton = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  ${rwd('lg')} {
    display:block;
  }
`

export const MenuBox = styled(Nav) <HeaderProps>`
  visibility: hidden;
  background-color: ${colors.white};
  padding: 20px;
  position: absolute;
  top: 3rem;
  right: 0;
  left: 0;
  z-index: 8;
  transform: translate3d(0, ${(props) => props.active ? "-500" : "0"}px, 0);
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  ul{
    flex-direction: column;
  }

  ${rwd('lg')} {
    visibility: visible
  }
`
