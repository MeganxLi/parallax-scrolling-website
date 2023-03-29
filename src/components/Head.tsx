import Menu from '../constants/Menu'
import { Header, HeaderTitle, HeaderNav, MenuButton, MenuBox } from '../styled/components/Head'
import { ReactComponent as MenuIcon } from "../assets/svg/menu.svg";
import { ReactComponent as CloseIcon } from "../assets/svg/x.svg";
import { useRef, useState } from 'react';

const Head = () => {
  const menuRef = useRef<HTMLElement>(null)
  const [isActive, setIsActive] = useState<boolean>(false)

  const clickMenuButton = () => {
    if (!menuRef.current) return

    setIsActive(!isActive)

    if (menuRef.current.classList.contains('animate__fadeOutUp')) {
      menuRef.current.classList.add('animate__fadeInDown');
      menuRef.current.classList.remove('animate__fadeOutUp');

    } else if (menuRef.current.classList.contains('animate__fadeInDown')) {
      menuRef.current.classList.remove('animate__fadeInDown');
      menuRef.current.classList.add('animate__fadeOutUp');
    } else {
      menuRef.current.classList.add('animate__fadeInDown');
    }
  }

  return (
    <>
      <Header>
        <HeaderTitle>THE F2E</HeaderTitle>
        <HeaderNav>
          <ul>
            {Menu.map((item) => <li key={item.title}>{item.title}</li>)}
          </ul>
        </HeaderNav>
        <MenuButton onClick={clickMenuButton}>
          {
            isActive ?
              <CloseIcon /> :
              <MenuIcon />
          }
        </MenuButton>
      </Header>
      <MenuBox ref={menuRef} active={isActive} style={{ transform: 'translate3d(0, -500px, 0)' }}>
        <ul>
          {Menu.map((item) => <li key={item.title}>{item.title}</li>)}
        </ul>
      </MenuBox>
    </>
  )
}

export default Head
