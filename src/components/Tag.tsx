import TagBlock from '../styled/components/Tag'

interface Props {
  initText: string
  fontSize: number;
  className?: string;
}
const Tag = ({ initText, fontSize, className }: Props) => (
  <TagBlock fontSize={fontSize} className={className}>
    {initText}
  </TagBlock>
)

export default Tag
