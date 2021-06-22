import Link from 'next/link'
import { useEffect } from 'react';
import gsap from 'gsap'

import Header from '../components/header';
import Suporte from '../components/suporte';
import Information from '../components/information';
import Footer from '../components/footer';

import styles from '../styles/pages/categorias.module.scss';

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
                                <Link href="/produtos/fresamento">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/fresamento-img.png" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Fresamento
                                        </div>
                                    </a>
                                </Link>

                                <Link href="/produtos/torneamento">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/torneamento.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Torneamento
                                        </div>
                                    </a>
                                </Link>

                                <Link href="/produtos/furacao">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/furacao.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Furação
                                        </div>
                                    </a>
                                </Link>
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