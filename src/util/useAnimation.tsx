import { useEffect } from 'react'

import { gsap } from 'gsap'

const useAnimationLoopText = (element: string) => {
  useEffect(() => {
    gsap.to(element, {
      xPercent: '-50',
      ease: 'none',
      duration: 8,
      repeat: -1,
    })
  }, [])
}

export default useAnimationLoopText
