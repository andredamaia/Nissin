import Head from 'next/head';
import Link from 'next/link'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Header from '../components/header';
import Information from '../components/information';
import Footer from '../components/footer';

import styles from '../styles/pages/index.module.scss';

SwiperCore.use([Navigation]);

export default function Home() {
  return (
    <>
      <Head>
        <title>Nissin Solutions</title>
      </Head>

      <Header />

      <div className={styles.bannerContent}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.titleBanner}>
                <h1><span>especialista</span> <br/>em ferramentas <br/>de usinagem</h1>

                <Link href="/categorias">
                  <a className="transition-line" data-hover-color="mantis">
                    Conheça nossos produtos <img src="/arrow-right.png" alt="" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-12">
              <div className={styles.textEnd}>
                Com experiência e know-how na área que vem<br/> de uma forte atuação no mercado ferramentas<br/> há mais de 10 anos.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.areaWhite}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Produtos</h2>

              <div className={styles.boxProdutos}>
                <div className={styles.box}>
                  <div className={styles.produtosImg}>
                    <img src="/object-1.png" alt="" />
                  </div>

                  <div className={styles.produtosTitle}>
                      <h4>Cutting Tools</h4>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tincidunt neque. Donec efficitur lorem non felis laoreet iaculis.</p>
                  </div>

                  <Link href="/categorias">
                    <a className="buttonPrimary">
                      Ver Produtos
                    </a>
                  </Link>
                </div>

                <div className={styles.box}>
                  <div className={styles.produtosImg}>
                    <img src="/object-2.png" alt="" />
                  </div>

                  <div className={styles.produtosTitle}>
                    <h4>Management</h4>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tincidunt neque. Donec efficitur lorem non felis laoreet iaculis.</p>
                  </div>

                  <a href="#" className="buttonPrimary">
                    Ver Produtos
                  </a>
                </div>

                <div className={styles.box}>
                  <div className={styles.produtosImg}>
                    <img src="/object-3.png" alt="" />
                  </div>

                  <div className={styles.produtosTitle}>
                    <h4>Technology</h4>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in tincidunt neque. Donec efficitur lorem non felis laoreet iaculis.</p>
                  </div>

                  <a href="#" className="buttonPrimary">
                    Ver Produtos
                  </a>
                </div>
              </div> 

              <h2>Parceiros</h2> 

              <div className={styles.swiperParceiros}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={4}
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
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.halfColor}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6">
                <p className={styles.textTitle}>
                  380+
                  <span className={styles.textSubtitle}>Ferramentas disponíveis</span>
                </p>

                <div className={styles.description}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius nibh quis erat eleifend vestibulum. Phasellus viverra ipsum nec quam rutrum, sed mollis ipsum efficitur. </p>
                </div>
            </div>

            <div className="col-12 col-xl-6">
              <div className={styles.management}>
                <img src="./management.png" alt="" />
              </div>

              <div className="row">
                <div className="col-4 col-xl-3">
                  <div className={styles.boxManagement}>
                    <div className={styles.imgCircle}>
                      <img src="./icon-fresamento.jpg" alt="" />
                    </div>

                    <div className={styles.boxSubtitle}>
                      <span>Fresamento</span>
                    </div>
                  </div>
                </div>

                <div className="col-4 col-xl-3">
                  <div className={styles.boxManagement}>
                    <div className={styles.imgCircle}>
                      <img src="./icon-torneamento.jpg" alt="" />
                    </div>

                    <div className={styles.boxSubtitle}>
                      <span>Torneamento</span>
                    </div>
                  </div>
                </div>

                <div className="col-4 col-xl-3">
                  <div className={styles.boxManagement}>
                    <div className={styles.imgCircle}>
                      <img src="./icon-furacao.jpg" alt="" />
                    </div>

                    <div className={styles.boxSubtitle}>
                      <span>Furação</span>
                    </div>
                  </div>
                </div>

                <div className="col-4 col-xl-3">
                  <div className={styles.boxManagement}>
                    <div className={styles.imgCircle}>
                      <img src="./icon-rosqueamento.jpg" alt="" />
                    </div>

                    <div className={styles.boxSubtitle}>
                      <span>Rosqueamento</span>
                    </div>
                  </div>
                </div>

                <div className="col-4 col-xl-3">
                  <div className={styles.boxManagement}>
                    <div className={styles.imgCircle}>
                      <img src="./icon-cones-e-acessorios.jpg" alt="" />
                    </div>

                    <div className={styles.boxSubtitle}>
                      <span>Cones e Acessórios</span>
                    </div>
                  </div>
                </div>


                <div className="col-4 col-xl-3">
                  <div className={styles.boxManagement}>
                    <div className={styles.imgCircle}>
                      <img src="./icon-zero-point.jpg" alt="" />
                    </div>

                    <div className={styles.boxSubtitle}>
                      <span>Zero Point</span>
                    </div>
                  </div>
                </div>

                <div className="col-4 col-xl-3">
                  <div className={styles.boxManagement}>
                    <div className={styles.imgCircle}>
                      <img src="./icon-gerenciamento-de-ferramentas.jpg" alt="" />
                    </div>

                    <div className={styles.boxSubtitle}>
                      <span>Gerenciamento de Ferramentas</span>
                    </div>
                  </div>
                </div>

                <div className="col-4 col-xl-3">
                  <div className={styles.boxManagement}>
                    <div className={styles.imgCircle}>
                      <img src="./icon-preset.jpg" alt="" />
                    </div>

                    <div className={styles.boxSubtitle}>
                      <span>Preset</span>
                    </div>
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

      <div className={`${styles.areaWhite} ${styles.aboutNissin}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-8">
              <h2>Sobre a Nissin</h2>

              <p>A Nissin Solutions Ltda, sediada em Joinville/SC, é distribuidora especialista em ferramentas de usinagem para as regiões de Santa Catarina e Paraná, trabalhando com marcas reconhecidas internacionalmente por fabricarem produtos de alto rendimento e excelente competitividade global.</p>

              <p>Contamos com experiência e know-how na área provenientes de uma forte atuação no mercado de ferramentas há mais de 10 anos. Nossa estrutura de atendimento interno e externo foi desenhada para acompanhar a qualidade das marcas que distribuímos, de modo a agregar um atendimento completamente personalizado e único.</p>

              <div>
                <a href="#" className="buttonPrimary">
                  Conheça Mais
                </a>
              </div>           
            </div>
          </div>
        </div>
      </div>

      <Information />

      <Footer />
    </>
  )
}
