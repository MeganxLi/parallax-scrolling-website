type MenuType = {
  title: string
  path?: string
}

type CarouselListType = {
  color: string,
  boxColor: string,
  text: string
  rwd: number
}

type CollaborateListType = {
  title: string,
  src: string
}

type ActivityContentListType = {
  class_name: string,
  title: string,
  sub: string,
  content: JSX.Element,
}

type ResolveListType = {
  week: number,
  title: string,
  tag: string[],
  ui_time: string,
  font_time: string,
}
