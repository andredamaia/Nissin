import { useEffect } from 'react'
import Link from 'next/link'
import gsap from  'gsap'

import styles from '../styles/components/header.module.scss'

export default function Header () {
  const openMenu = () => {
    gsap.to('.mobileMenu', {
      autoAlpha: 1,
      ease: 'power3.inOut',
    })

    gsap.to('.mobileMenu a', {
      autoAlpha: 1,
      ease: 'power3.inOut',
      y: 10,
      delay: .4,
      stagger: {
          amount: .3
      }
    })

    gsap.to('.open-menu', {
      autoAlpha: 0,
      ease: 'power3.inOut',
    })

    gsap.to('.close-menu', {
      autoAlpha: 1,
      ease: 'power3.inOut',
    })
  }

  const closeMenu = () => {
    gsap.to('.mobileMenu', {
      autoAlpha: 0,
      ease: 'power3.inOut',
    })

    gsap.to('.mobileMenu a', {
      autoAlpha: 0,
      ease: 'power3.inOut',
      y: 0,
      delay: .4,
      stagger: {
          amount: .3
      }
    })

    gsap.to('.open-menu', {
      autoAlpha: 1,
      ease: 'power3.inOut',
    })

    gsap.to('.close-menu', {
      autoAlpha: 0,
      ease: 'power3.inOut',
    })
  }

  return (
    <header className={styles.header}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-md-4 col-xl-4">
            <Link href="/"><a><img src="/logo.jpg" style={{ width: 180, mixBlendMode: 'multiply' }} alt="Nissin solutions" /></a></Link>
          </div>

          <div className="col-12 col-md-8 col-xl-8 d-none d-md-block">
            <div className={styles.menu}>
              <div className={styles.submenuInfos}>
                <div className={styles.infos}>
                  <a href="mailto:contato@nissinsolutions.com.br">
                      <img src="/email.png" alt="" />
                      nissin@nissinsolutions.com.br
                  </a>
                </div>

                <div className={styles.infos}>
                  <img src="/phone.png" alt="" />

                  <a href="tel:+554730290985">+55 (47) 3029-0985</a>

                  <span>•</span>

                  <a href="tel:+5547988496155">+55 (47) 98849-6155</a>
                </div>
              </div>

              <div className={styles.menuList}>
                <Link href="/"><a>Home <div className={styles.line}></div></a></Link>

                <Link href="/categorias"><a>Produtos <div className={styles.line}></div></a></Link>

                <Link href="/sobre"><a>Sobre <div className={styles.line}></div></a></Link>

                <Link href="/parceiros"><a>Parceiros <div className={styles.line}></div></a></Link>

                <Link href="/contato"><a>Contato <div className={styles.line}></div></a></Link>
              </div>
            </div>
          </div>

          <div className="col-6 d-md-none text-right">
            <img 
              src="/icon-menu.png" 
              onClick={openMenu} 
              style={{ maxWidth: 35, float: 'right', marginTop: 15 }} 
              alt="" 
              className={`open-menu ${styles.openMenu}`}
            />

            <span onClick={closeMenu}  className={`close-menu ${styles.closeMenu}`}>X</span>
          </div>
        </div> 
      </div>

      <div className={`${styles.mobileMenu} mobileMenu`}>
        <Link href="/"><a>Home <div className={styles.line}></div></a></Link>
        <Link href="/categorias"><a>Produtos <div className={styles.line}></div></a></Link>
        <Link href="/sobre"><a>Sobre <div className={styles.line}></div></a></Link>
        <Link href="/parceiros"><a>Parceiros <div className={styles.line}></div></a></Link>
        <Link href="/contato"><a>Contato <div className={styles.line}></div></a></Link>
      </div> 
    </header> 
  )
}