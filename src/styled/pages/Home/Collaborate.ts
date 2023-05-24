import { styled } from '@linaria/react'

import { rwd } from '../../util/Mixins'
import colors from '../../util/Variables'

export const CollaborateBlock = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 140px;
  padding-bottom: 350px;

  ${rwd('lg')} {
    padding: 140px;
  }

  ${rwd('md')} {
    padding: 3rem;
  }
`

export const CollaborateTitle = styled.div`
  font-size: 52px;
  display: flex;
  align-items: center;
  font-family: 'GenSenRounded-H';
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 150px;

  svg {
    width: 50px;
    height: 50px;
  }

  ${rwd('lg')} {
    font-size: 40px;
    margin-bottom: 3rem;

    svg {
    width: 20px;
    height: 20px;
   }
  }

  ${rwd('md')} { 
    font-size: 24px;
    margin-bottom: 3rem;

    svg {
      display: none;
    }
  }
`

export const CollaborateContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;

  ${rwd('lg')} {
    gap: 32px;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const CollaborateItem = styled.div`
  width: 25%;
  min-width: 150px;
  height: auto;
  aspect-ratio: 1 / 1;
  border-radius: 50px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  img {
    width: 80%;
  }

  ${rwd('lg')} {
    padding: 18px;
    border-radius: 10px;    
  }
`
