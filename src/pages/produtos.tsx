import Link from 'next/link'
import Head from 'next/head';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import gsap from 'gsap'
import { api } from '../services/api'

import Header from '../components/header';
import Information from '../components/information';
import Footer from '../components/footer';

import styles from '../styles/pages/produtos.module.scss';

SwiperCore.use([Navigation, Autoplay]);

export default function Produtos({ data }: any) {
    const router = useRouter()
    const tools = [...data];

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
            <Head>
                <title>Nissin Solutions</title>
            </Head>

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

            <div className={`${styles.areaWhite} ${styles.product}`} style={{ marginTop: -145, zIndex: 10, position: 'relative', paddingBottom: 0 }}>
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <div className={styles.pageIndication}>
                                <a href="/">Home</a>

                                <span>/</span>

                                <Link href="/cutting-tools">
                                    <a>
                                        Cutting Tools
                                    </a>
                                </Link>

                                <span>/</span>

                                <Link href="/management">
                                    <a>
                                        Management
                                    </a>
                                </Link>

                                <span>/</span>

                                <Link href="/tecnology">
                                    <a>
                                        Tecnology
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.areaWhite}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.swiperParceiros}>
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={4}
                                    autoplay
                                    loop={true}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    navigation
                                    className={styles.parceirosSlider}
                                    >
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/ceratizit.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/osg.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/hgt.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/startool.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/geotecno.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/spinwiser.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/american.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/bt-fixo.jpg" alt="" /></div></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.halfColor}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4 col-md-3 col-xl-3">
                                    <Link href="/produtos/fresamento">
                                        <a>
                                        <div className={styles.boxManagement}>
                                            <div className={styles.imgCircle}>
                                            <img src="./icon-fresamento.jpg" alt="" />
                                            </div>

                                            <div className={styles.boxSubtitle}>
                                            <span>Fresamento</span>
                                            </div>
                                        </div>
                                        </a>
                                    </Link>
                                </div>

                                <div className="col-4 col-md-3 col-xl-3">
                                    <Link href="/produtos/torneamento">
                                        <a>
                                        <div className={styles.boxManagement}>
                                            <div className={styles.imgCircle}>
                                            <img src="./icon-torneamento.jpg" alt="" />
                                            </div>

                                            <div className={styles.boxSubtitle}>
                                            <span>Torneamento</span>
                                            </div>
                                        </div>
                                        </a>
                                    </Link>
                                </div>

                                <div className="col-4 col-md-3 col-xl-3">
                                    <Link href="/produtos/furacao">
                                        <a>
                                        <div className={styles.boxManagement}>
                                            <div className={styles.imgCircle}>
                                            <img src="./icon-furacao.jpg" alt="" />
                                            </div>

                                            <div className={styles.boxSubtitle}>
                                            <span>Furação</span>
                                            </div>
                                        </div>
                                        </a>
                                    </Link>
                                </div>

                                <div className="col-4 col-md-3 col-xl-3">
                                    <Link href="/produtos/rosqueamento">
                                        <a>
                                        <div className={styles.boxManagement}>
                                            <div className={styles.imgCircle}>
                                            <img src="./icon-rosqueamento.jpg" alt="" />
                                            </div>

                                            <div className={styles.boxSubtitle}>
                                            <span>Rosqueamento</span>
                                            </div>
                                        </div>
                                        </a>
                                    </Link>
                                </div>

                                <div className="col-4 col-md-3 col-xl-3">
                                    <Link href="/produtos/fixacao">
                                        <a>
                                        <div className={styles.boxManagement}>
                                            <div className={styles.imgCircle}>
                                            <img src="./icon-cones-e-acessorios.jpg" alt="" />
                                            </div>

                                            <div className={styles.boxSubtitle}>
                                            <span>Fixação</span>
                                            </div>
                                        </div>
                                        </a>
                                    </Link>
                                </div>

                                <div className="col-4 col-md-3 col-xl-3">
                                    <div className={styles.boxManagement}>
                                        <div className={styles.imgCircle}>
                                        <img src="./zero-point.jpg" alt="" />
                                        </div>

                                        <div className={styles.boxSubtitle}>
                                        <span>Zero Point</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4 col-md-3 col-xl-3">
                                    <Link href="/management">
                                        <a>
                                        <div className={styles.boxManagement}>
                                            <div className={styles.imgCircle}>
                                            <img src="./icon-gerenciamento-de-ferramentas.jpg" alt="" />
                                            </div>

                                            <div className={styles.boxSubtitle}>
                                            <span>Gerenciamento <br />de Ferramentas</span>
                                            </div>
                                        </div>
                                        </a>
                                    </Link>
                                </div>

                                <div className="col-4 col-md-3 col-xl-3">
                                    <Link href="/tecnology">
                                        <a>
                                        <div className={styles.boxManagement}>
                                            <div className={styles.imgCircle}>
                                            <img src="./icon-preset.jpg" alt="" />
                                            </div>

                                            <div className={styles.boxSubtitle}>
                                            <span>Preset</span>
                                            </div>
                                        </div>
                                        </a>
                                    </Link>
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

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('tools?_embed',  {
        params: {
            _limit: 12,
            _order: 'desc'
        }
    })

    return {
        props: {
            data
        },
        revalidate: 60 * 60* 8,
    }
}