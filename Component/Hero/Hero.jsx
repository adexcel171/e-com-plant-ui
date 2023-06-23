import React from 'react'
import style from './hero.module.css'
import Image from 'next/image'
import icon from '../../public/assets/search.png'
import line from '../../public/assets/Line 1.png'
import rectangle from '../../public/assets/Rectangle 2.png'

const Hero = () => {
  return (
    <>
    <div className={style.container}>
        <div className={style.col}>
            <h1 className={style.title} >Buy your dream plants</h1>
            <div className={style.hero_p}>
                <p>50 + <br /> plants </p>
                <Image src={line} /> 
                <p>100 + <br /> customers</p>
            </div>
            <div className={style.search_area} >
                <input className={style.search_area} type="text" placeholder='what are yoo looking for...'   />
                <Image className={style.icon} src={icon} />
              
            </div>
        </div>
        <div className={style.col2}>
            <Image className={style.rectangle} src={rectangle} />
        </div>
    </div>
      
    </>
  )
}

export default Hero
