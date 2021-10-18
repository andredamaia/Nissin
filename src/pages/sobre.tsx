import Head from 'next/head'

import Header from '../components/header';
import Information from '../components/information';
import Footer from '../components/footer';

import styles from '../styles/pages/sobre.module.scss';

export default function Sobre() {
  return (
    <>
        <Head>
            <title>Sobre - Nissin Solutions</title>
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

                        <p>A Nissin Solutions, sediada em Joinville/SC, é uma empresa distribuidora de ferramentas e soluções técnicas para usinagem, trabalhando com marcas reconhecidas internacionalmente por fabricarem produtos com alta tecnologia e excelente competitividade global.</p>

                        <p>Contamos com experiência e know-how na área, provenientes de uma forte atuação no segmento de ferramentas há mais de uma década. Nossa estrutura de atendimento interno e externo foi projetada para ser o integrador de soluções entre fabricantes e clientes.</p>

                        <p>Nossa estratégia de negócio vai muito além de fornecer produtos, estamos focados na entrega de serviços com inovações tecnológicas, estabelecendo uma relação sólida e confiável com nossos clientes, parceiros e colaboradores.</p>         
                    </div>

                    <div className="col-12" style={{ marginTop: 40 }}>
                        <div className={styles.boxProdutos}>
                            <div className={styles.box}>
                                <div className={styles.produtosImg}>
                                    <img src="./missao.jpg" alt="" />
                                </div>

                                <div className={styles.produtosTitle}>
                                    <h4>Missão</h4>

                                    <p>Fornecer soluções com inovação tecnológica, implantado melhorias contínuas em processos indústrias, aplicando ferramentas de excelente custo- benefício, desenvolvendo o capital humano e gerando lucro.</p>
                                </div>
                            </div>

                            <div className={styles.box}>
                                <div className={styles.produtosImg}>
                                    <img src="./visao.jpg" alt="" />
                                </div>

                                <div className={styles.produtosTitle}>
                                    <h4>Visão</h4>

                                    <p>Ser reconhecida e respeitada como uma empresa sólida, diferenciada e saudável, tornando-se referência para nossos clientes, colaboradores e parceiros.</p>
                                </div>
                            </div>

                            <div className={styles.box}>
                                <div className={styles.produtosImg}>
                                    <img src="./valores.jpg" alt="" />
                                </div>

                                <div className={styles.produtosTitle}>
                                    <h4>Valores</h4>

                                    <p>Comprometimento, Responsabilidade, Parceria, Ética, Humildade, Dignidade, Vontade e Realização.</p>
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
