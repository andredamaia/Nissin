import Link from 'next/link'

import styles from '../styles/components/header.module.scss'

export default function Header () {
    return (
      <header className={styles.header}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12  col-md-4 col-xl-4">
              <Link href="/"><a><img src="/logo.png" alt="Nissin solutions" /></a></Link>
            </div> 

            <div className="col-12 col-md-8 col-xl-8">
              <div className={styles.menu}>
                <div className={styles.submenuInfos}>
                  <div className={styles.infos}>
                    <a href="mailto:contato@nissinsolutions.com.br">
                        <img src="email.png" alt="" />
                        
                        contato@nissinsolutions.com.br
                    </a>
                  </div>

                  <div className={styles.infos}>
                    <img src="phone.png" alt="" />

                    <a href="tel:+554730290985">+55 (47) 3029-0985</a>

                    <span>•</span>

                    <a href="tel:+5547988496155">+55 (47) 98849-6155</a>
                  </div>
                </div>

                <div className={styles.menuList}>
                  <Link href="/"><a>Home <div className={styles.line}></div></a></Link>

                  <Link href="/sobre"><a>Sobre <div className={styles.line}></div></a></Link>

                  <Link href="/categorias"><a>Produtos <div className={styles.line}></div></a></Link>

                  <Link href="/contato"><a>Contato <div className={styles.line}></div></a></Link>
                </div>
              </div>
            </div>
          </div> 
        </div> 
      </header> 
    )
}