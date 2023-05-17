import { styled } from '@linaria/react'

import { rwd } from '../../util/Mixins'
import colors from '../../util/Variables'

export const ResolveBlock = styled.div`
  background-color: ${colors.orange[3]};
  padding: 6rem;
  position: relative;
  overflow: hidden;

  ${rwd('sm')} {
    padding: 6rem 2rem;
  }
`
export const ResolveHeader = styled.div`
  display: flex;
  margin-bottom: 6rem;
  border-top: 1px solid ${colors.black.core};
  border-bottom: 1px solid ${colors.black.core};
  padding: 2rem;
  position: relative;

  ${rwd('sm')} {
    margin-bottom: 1.5rem;
  }
`

const StarIcon = styled.div`
  position: absolute;
  width: 2.2rem;
  height: 2.2rem;
  svg > path {
    fill: black
  };

  ${rwd('sm')} {
    width: 8px;
    height: 8px;
  }
`
export const ResolveStar1 = styled(StarIcon)`
  left: 30%;
  top: -17px;

  ${rwd('sm')} {
    top: -10px;
  }
`

export const ResolveStar2 = styled(StarIcon)`
  right: 30%;
  bottom: -17px;

  ${rwd('sm')} {
  bottom: 1px;
  }
`

export const ResolveTitleBlock = styled.div`
  display: flex;
  transform: translate(calc(68.3rem - ((192rem - 100vw) / 2)));
  transition: all 2s;

  ${rwd('xl')} {
    transform: translate(calc(72.3rem - ((192rem - 100vw) / 2)));
  }


  ${rwd('md')} {
    transform: translate(calc(79.3rem - ((192rem - 100vw) / 2)));
  }

  ${rwd('sm')} {
    transform: translate(calc(87.3rem - ((192rem - 100vw) / 2)));
  }
`

export const ResolveItemTitle = styled.h2<ResolveItemProps>`
  font-family: 'Georama';
  font-style: normal;
  font-weight: 300;
  font-size: 200px;
  line-height: 240px;
  letter-spacing: 0.1em;
  margin-right: calc(36rem - ((192rem - 100vw) / 4));
  transition: all .3s;

  &.active{
    color: ${(props) => props.color};
    font-weight: 600;
  }

  ${rwd('xl')} {
    font-size: 140px;
    line-height: 160px;
    margin-right: calc(40rem - ((192rem - 100vw) / 4));
  }

  ${rwd('md')} {
    font-size: 80px;
    line-height: 100px;
    margin-right: calc(42rem - ((192rem - 100vw) / 4));
  }

  ${rwd('sm')} {
    font-size: 40px;
    line-height: 48px;
    margin-right: calc(48rem - ((192rem - 100vw) / 4));
  }
`

export const ResolveBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14.5rem;


  ${rwd('md')} {
    gap: 5rem;
  }

  ${rwd('sm')} {
    gap: 1.5rem;
  }
`

export const ResolveSection = styled.div`
  margin-bottom: 14.5rem;

  ${rwd('md')} {
    opacity: 0.2;

    &.active {
      opacity: 1;
    }
    margin-bottom: 0;
  }
`

export const ResolveItemSub = styled.div`
  font-family: 'GenSenRounded-M';
  font-weight: 700;
  font-size: 80px;
  color: ${colors.black[900]};
  margin: 3rem auto;
  text-align: center;


  ${rwd('xl')} {
    font-size: 50px;
  }

  ${rwd('md')} {
    font-size: 36px;
  }

  ${rwd('sm')} {
    font-size: 24px;
  }
`

export const ResolveItemTag = styled.pre<ResolveItemProps>`
  color: ${({ color }) => color};
  display: initial;
  font-family: 'Georama';
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.15em;
  margin-right: 1rem;

  ${rwd('xl')} {
    font-size: 24px;
  }

  ${rwd('md')} {
    font-size: 16px;
  }

  ${rwd('sm')} {
    font-size: 12px;
  }
`

export const ResolveItemContent = styled.div`
  font-family: 'Georama';
  color: ${colors.black[900]};
  font-size: 32px;
  line-height: 42px;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 1.5rem 0;

  ${rwd('xl')} {
    font-size: 24px;
    line-height: 30px;
  }

  ${rwd('md')} {
    font-size: 16px;
    line-height: 24px;
  }

  ${rwd('sm')} {
    font-size: 12px;
    line-height: 14px;
    margin: 1rem 0;
  }
`

export const ResolveItemButton = styled.button`
  font-family: 'GenSenRounded-M';
  font-size: 20px;
  letter-spacing: 0.15em;
  color: ${colors.black.core};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: ${colors.white};
  border: 1px solid ${colors.black.core};
  border-radius: 2px;

  ${rwd('xl')} {
    font-size: 16px;
    padding: 8px;
  }

  ${rwd('sm')} {
    font-size: 12px;
    padding: 6px 16px;

    svg{
      width: 16px;
      height: 16px;
    }
  }
`
