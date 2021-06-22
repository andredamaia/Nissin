import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import gsap from 'gsap'
import { api } from '../../services/api'

import Header from '../../components/header';
import Suporte from '../../components/suporte';
import Information from '../../components/information';
import Footer from '../../components/footer';

import styles from '../../styles/pages/categoria.module.scss';


export default function Produtos({ tools, categories }: any) {
    const router = useRouter()
    const { categoria } = router.query

    const suportes_e_insertos = categories.filter((categorie: any) => categorie.parent === 3)

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

                                <a href="/categorias">Cutting Tools</a>

                                <span>/</span>

                                <a href={`/categoria/${categoria}`}>{ categoria }</a>

                            </div>
                        </div>

                        <div className="col-12 col-xl-12">
                            <div className={styles.sidebar}>
                                <p>Suportes e Insertos</p>
                            </div>

                            {suportes_e_insertos.map(categorie => (
                                <div className={styles.sidebar}>
                                    <ul><li><Link href={`/produtos/${categorie.slug}`}><a>{ categorie.name }</a></Link></li></ul>
                                </div>
                            ))}
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

export const getStaticProps: GetStaticProps = async () => {
    const { data: tools } = await api.get('tools?_embed',  {
        params: {
            _limit: 90,
            _order: 'desc'
        }
    })

    const { data: categories } = await api.get('categories?_embed',  {
        params: {
            _limit: 30,
            _order: 'desc'
        }
    })

    return {
        props: {
            tools,
            categories
        },
        revalidate: 60 * 60* 8,
    }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}