import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { ReactComponent as StarIcon } from '../../assets/svg/star.svg'
import CollaborateList from '../../constants/CollaborateList'
import {
  CollaborateBlock, CollaborateContainer, CollaborateItem, CollaborateTitle,
} from '../../styled/pages/Home/Collaborate'
import colors from '../../styled/util/Variables'

const durationSec = 3

const Collaborate = () => {
  const collaborateBlockRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const collaborateListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: collaborateBlockRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
        once: true,
      },
    })

    scrollTL.fromTo(
      collaborateBlockRef.current,
      { backgroundColor: colors.orange[3] },
      { backgroundColor: colors.orange[1], duration: durationSec, ease: 'power2.inOut' },
    ).fromTo(
      titleRef.current,
      { color: colors.orange[1] },
      { color: colors.white, duration: durationSec, ease: 'power2.inOut' },
      '<',
    ).fromTo(
      '.icon-star',
      { fill: colors.yellow[1] },
      { fill: colors.white, duration: durationSec, ease: 'power2.inOut' },
      '<',
    ).fromTo(
      collaborateListRef.current,
      { transform: 'translateY(100px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 },
    )
  }, [])

  return (
    <CollaborateBlock ref={collaborateBlockRef}>
      <CollaborateTitle>
        <StarIcon className="icon-star" />
        <span ref={titleRef}>本次活動贊助單位</span>
        <StarIcon className="icon-star" />
      </CollaborateTitle>
      <CollaborateContainer ref={collaborateListRef}>
        {
          CollaborateList.map((item: CollaborateListType) => (
            <CollaborateItem key={item.title}>
              <img src={item.src} alt={item.title} />
            </CollaborateItem>
          ))
        }
      </CollaborateContainer>
    </CollaborateBlock>
  )
}

export default Collaborate
