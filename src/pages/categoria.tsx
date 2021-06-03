import Header from '../components/header';
import Suporte from '../components/suporte';
import Information from '../components/information';
import Footer from '../components/footer';

import styles from '../styles/pages/categoria.module.scss';

export default function Categoria() {
    return (
        <>
            <Header />

            <div className={styles.bannerInternas}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.titleBanner}>
                                <h1><span>Nossos</span> <br/>produtos</h1> 
                            </div>  
                        </div>  
                    </div>     
                </div> 
            </div>

            <div className={styles.areaWhite}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.pageIndication}>
                            
                                <a href="/">Home</a>

                                <span>/</span>

                                <a href="#">Cutting Tools</a>

                            </div>

                            <div className={styles.boxTools}>
                        
                                <a href="#">
                                    <div className={styles.toolsImg}>
                                        <img src="/fresamento-img.png" alt="" />
                                    </div>

                                    <div className={styles.toolsName}>
                                        Fresamento
                                    </div>
                                </a>

                                <a href="#">
                                    <div className={styles.toolsImg}>
                                        <img src="/faceamento-img.png" alt="" />
                                    </div>

                                    <div className={styles.toolsName}>
                                        Faceamento
                                    </div>
                                </a>

                                <a href="#">
                                    <div className={styles.toolsImg}>
                                        <img src="/contorno-img.png" alt="" />
                                    </div>

                                    <div className={styles.toolsName}>
                                        Contorno
                                    </div>
                                </a>

                                <a href="#">
                                    <div className={styles.toolsImg}>
                                        <img src="/redondo-img.png" alt="" />
                                    </div>

                                    <div className={styles.toolsName}>
                                        Redondo
                                    </div>
                                </a>

                                <a href="#">
                                    <div className={styles.toolsImg}>
                                        <img src="/copia-img.png" alt="" />
                                    </div>

                                    <div className={styles.toolsName}>
                                        Copia
                                    </div>
                                </a>

                                <a href="#">
                                    <div className={styles.toolsImg}>
                                        <img src="/chaves-img.png" alt="" />
                                    </div>

                                    <div className={styles.toolsName}>
                                        Chaves
                                    </div>
                                </a>

                                <a href="#">
                                    <div className={styles.toolsImg}>
                                        <img src="/geral-img.png" alt="" />
                                    </div>

                                    <div className={styles.toolsName}>
                                        Geral
                                    </div>
                                </a>
                            </div>
                        </div>

                        <Suporte />
                    </div>
                </div>
            </div>


            <Information />

            <Footer />
        </>
    )
}