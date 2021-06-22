import Head from 'next/head'

import Header from '../components/header';
import Information from '../components/information';
import Footer from '../components/footer';

import styles from '../styles/pages/sobre.module.scss';

export default function Sobre() {
  return (
    <>
        <Head>
            <title>Nissin Solutions - Sobre</title>
        </Head>

        <Header />

        <div className={styles.bannerContent}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.titleBanner}>
                            <h1><span>conheça</span> <br/>nossa história</h1>

                            <p>Com experiência e know-how na área que vem<br/> de uma forte atuação no mercado ferramentas<br/> há mais de 10 anos.</p>
                        </div>
                    </div>

                    <div className="col-12">
                        
                    </div>
                </div>
            </div>
        </div>

        <div className={`${styles.areaWhite} ${styles.aboutNissin}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Sobre a Nissin</h2>

                        <p>A Nissin Solutions Ltda, sediada em Joinville/SC, é distribuidora especialista em ferramentas de usinagem para as regiões de Santa Catarina e Paraná, trabalhando com marcas reconhecidas internacionalmente por fabricarem produtos de alto rendimento e excelente competitividade global.</p>

                        <p>Contamos com experiência e know-how na área provenientes de uma forte atuação no mercado de ferramentas há mais de 10 anos. Nossa estrutura de atendimento interno e externo foi desenhada para acompanhar a qualidade das marcas que distribuímos, de modo a agregar um atendimento completamente personalizado e único.</p>          
                    </div>

                    <div className="col-12" style={{ marginTop: 40 }}>
                        <div className={styles.boxProdutos}>
                            <div className={styles.box}>
                                <div className={styles.produtosImg}>
                                    <img src="./missao.jpg" alt="" />
                                </div>

                                <div className={styles.produtosTitle}>
                                    <h4>Missão</h4>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tincidunt neque. Donec efficitur lorem non felis laoreet iaculis.</p>
                                </div>
                            </div>

                            <div className={styles.box}>
                                <div className={styles.produtosImg}>
                                    <img src="./visao.jpg" alt="" />
                                </div>

                                <div className={styles.produtosTitle}>
                                    <h4>Visão</h4>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tincidunt neque. Donec efficitur lorem non felis laoreet iaculis.</p>
                                </div>
                            </div>

                            <div className={styles.box}>
                                <div className={styles.produtosImg}>
                                    <img src="./valores.jpg" alt="" />
                                </div>

                                <div className={styles.produtosTitle}>
                                    <h4>Valores</h4>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tincidunt neque. Donec efficitur lorem non felis laoreet iaculis.</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.imagesTools}>
            <div className="container-fluid">
                <div className="row">
                    <div className={styles.fullContainer}>
                    <img src="/tool1.jpg" alt="" />
                    </div>

                    <div className={styles.fullContainer}>
                    <img src="/tool2.jpg" alt="" />
                    </div>

                    <div className={styles.fullContainer}>
                    <img src="/tool3.jpg" alt="" />
                    </div>

                    <div className={styles.fullContainer}>
                    <img src="/tool4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

      <Information />

      <Footer />
    </>
  )
}
