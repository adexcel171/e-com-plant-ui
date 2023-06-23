import React from 'react'
import style from './header.module.css'
import Image from 'next/image'
import icons from "../../public/assets/icons.png"
import logo from "../../public/assets/logo.png"


const Header = () => {
  return (
    <div className={style.container}>
        <header className={style.wrapper}>
       <Image src={logo} />
            <nav className={style.navlist}>
                <ul className={style.navlist}>
                    <li className={style.navitem}>Home</li>
                    <li className={style.navitem}>Product</li>
                    <li className={style.navitem}>Contact</li>
                
                </ul>
            </nav>
<Image src={icons}/>
        </header>
      
    </div>
  )
}

export default Header
