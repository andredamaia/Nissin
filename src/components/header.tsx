import styles from '../styles/components/header.module.scss'

export default function Header () {
    return (
      <header className={styles.header}>
        <div className="container-fluid">
          <div className="row">
           <div className="col-12  col-md-4 col-xl-4">
              <a href="/"><img src="logo.png" alt="Nissin solutions" /></a> 
            </div> 

            <div className="col-12 col-md-8 col-xl-8">
              <div className={styles.menu}>
                <div className={styles.submenuInfos}>
                  <div className={styles.infos}>
                    <a href="#">
                        <img src="email.png" alt="" />
                        
                        contato@nissinsolutions.com.br
                    </a>
                  </div>

                  <div className={styles.infos}>
                    <img src="phone.png" alt="" />

                    <a href="#">+55 (47) 3029-0985</a>

                    <span>•</span>

                    <a href="#">+55 (47) 98849-6155</a>
                  </div>
                </div>

                <div className={styles.menuList}>
                  <a href="/">Home</a>

                  <a href="#">Sobre</a>

                  <a href="/produtos">Produtos</a>

                  <a href="/contato">Contato</a>
                </div>
              </div>
            </div>
          </div> 
        </div> 
      </header> 
    )
}