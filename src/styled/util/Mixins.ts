export const breakpoints: { [key: string]: string } = {
  '2xs': '375px',
  'xs': '480px',
  'sm': '640px',
  'md': '768px',
  'lg': '992px',
  'xl': '1280px',
  '2xl': '1536px',
}

export const rwd = (breakpoint: string) => {
  const point = breakpoints[breakpoint]
  if (!point) {
    console.warn(`Invalid breakpoint: ${breakpoint}.`)
    return ''
  }
  return `@media (max-width: ${point})`
}
