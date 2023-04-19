import { styled } from '@linaria/react'

import colors from '../util/Variables'

const TagBlock = styled.div<TagProps>`
  font-family: 'GenSenRounded-M';
  color: ${colors.black[900]};
  background-color: ${colors.white};
  border: 2px solid ${colors.black.core};
  border-radius: 100px;
  text-align: center;
  font-size: ${(props) => props.fontSize}px;
  padding: 10px 24px;
  width: fit-content;
`

export default TagBlock
