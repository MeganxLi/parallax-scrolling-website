import { styled } from '@linaria/react'

import colors from '../../util/Variables'

export const ContestBlock = styled.div`
  background-color: ${colors.orange[3]};
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
`

export const ContestTitle = styled.h1`
  color: ${colors.green[1]};
  font-family: 'GenSenRounded-H';
  font-weight: bold;
  font-size: 120px;
  letter-spacing: 0.15em;
  white-space:nowrap;
`

export const ContestPoint = styled.span`
    display: block;
    width: 30px;
    height: 30px;
    background-color: ${colors.white};
    border-radius: 50%;
    margin: 4rem auto;
`

export const ContestCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 1045px;
  height: 440px;
  margin: 5rem auto;

  &::before{
    content: "";
    width: 80vw;
    height: 100%;
    position: absolute;
    background-color: ${colors.green[1]};
    top: 50%;
    left: 0%;
    z-index: 0;
  } 

  &:first-of-type::before {
    transform: translate(-70%,-50%);
  }
    
  &:last-of-type::before {
    transform: translate(70%, -50%);
  }
`

export const ContestCardTitle = styled.h4`
  color: ${colors.green[1]};
  font-size: 52px;
  letter-spacing: 0.15em;
  font-family: 'GenSenRounded-H';
  position: absolute;
  top: -2rem;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 5;
`

export const ContestCardContent = styled.div`
  color: ${colors.black.core};
  height: -webkit-fill-available;
  font-family: 'GenSenRounded-M';
  font-size: 40px;  
  padding: 5rem;
  border-radius: 100px;
  background-color:${colors.white};
  position: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  span {
    display:block;
    display: list-item;
    margin-left: 2rem;
    padding: 1rem 0;
  }

  li  {
    margin: 1rem 0;
    margin-left: 3rem;
  }
`

export const ContestButton = styled.button`
  font-family: 'Georama'; 
  padding: 1rem 5rem;
  color: ${colors.white};
  background-color: ${colors.green[1]};
  font-size: 64px;
  font-weight: bold;
  line-height: 76px;
  letter-spacing: 0.15em;
  border: none;
  border-radius: 20px;
  display: block;
  margin: 8rem auto;
  position: relative;

  &::after, &::before{
    content: "";
    width: 20px;
    height: 160px;
    border-radius: 20px;
    background-color: ${colors.green[2]};
    position: absolute;
  }

  &::before{
    transform: rotate(-36.46deg);
    top: -1rem;
    left: -6rem;
  }

  &::after{
    transform: rotate(36.46deg);
    top: -1rem;
    right: -6rem;
  }
`
