import { styled } from '@linaria/react'

// import { rwd } from '../../util/Mixins'
import colors from '../../util/Variables'

export const ResolveBlock = styled.div`
  background-color: ${colors.orange[3]};
  padding: 6rem;
  position: relative;
  overflow: hidden;
`
export const ResolveHeader = styled.div`
  display: flex;
  margin-bottom: 6rem;
  border-top: 1px solid ${colors.black.core};
  border-bottom: 1px solid ${colors.black.core};
  padding: 2rem;
  position: relative;
`

const StarIcon = styled.div`
  position: absolute;
  width: 2.2rem;
  height: 2.2rem;
  svg > path {
    fill: black
  };
`
export const ResolveStar1 = styled(StarIcon)`
  left: 30%;
  top: -1.1rem;
`
export const ResolveStar2 = styled(StarIcon)`
  right: 30%;
  bottom: -1.1rem;
`
export const ResolveTitleBlock = styled.div`
  display: flex;
    transform: translate(calc(68.3rem - ((192rem - 100vw) / 2)));
  transition: all 2s;
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
`

export const ResolveBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14.5rem;
`

export const ResolveSection = styled.div`
  margin-bottom: 14.5rem;
`

export const ResolveItemSub = styled.div`
  font-family: 'GenSenRounded-M';
  font-weight: 700;
  font-size: 80px;
  color: ${colors.black[900]};
  margin: 3rem auto;
`

export const ResolveItemTag = styled.pre<ResolveItemProps>`
  color: ${({ color }) => color};
  display: initial;
  font-family: 'Georama';
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.15em;
  margin-right: 1rem;
`

export const ResolveItemContent = styled.div`
  font-family: 'Georama';
  color: ${colors.black[900]};
  font-size: 32px;
  line-height: 42px;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 1.5rem 0;
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
`
