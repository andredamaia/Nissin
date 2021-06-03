import { useEffect } from 'react';
import gsap from 'gsap'

import Header from '../components/header';
import Suporte from '../components/suporte';
import Information from '../components/information';
import Footer from '../components/footer';

import styles from '../styles/pages/categoria.module.scss';

export default function Categoria() {
    useEffect(() => {
        gsap.to('.animate', {
            duration: .5,
            height: '250px',
            autoAlpha: 1,
            ease: 'power3.inOut'
        });

        gsap.to('.transition-text i', {
            delay: -.05,
            y: 0,
            duration: 1,
            stagger: {
                amount: .3
            },
            ease: 'power3.inOut'
        });
    });

    return (
        <>
            <Header />

            <div className={styles.internaContainer}>
                <div className={`${styles.bannerInternas} animate`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={styles.titleBanner}>
                                    <h1>
                                        <span><div className="transition-text"><i>nossos</i></div></span>
                                        <div className="transition-text"><i>produtos</i></div>
                                    </h1> 
                                </div>  
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