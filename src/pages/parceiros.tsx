import Head from 'next/head'

import Header from '../components/header';
import Information from '../components/information';
import Footer from '../components/footer';

import styles from '../styles/pages/sobre.module.scss';

export default function Parceiros() {
  return (
    <>
        <Head>
            <title>Parceiros - Nissin Solutions</title>
        </Head>

        <Header />

        <div className={styles.bannerContent}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.titleBanner}>
                            <h1><span>conheça</span> <br/>nossos parceiros</h1>

                            <p>Apenas com parcerias <br />de alta qualidade conseguimos <br />chegar mais longe e crescer <br />cada vez mais.</p>
                        </div>
                    </div>

                    <div className="col-12">
                        
                    </div>
                </div>
            </div>
        </div>

        <div className={`${styles.areaWhite}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/logo.jpg" style={{ width: 180, mixBlendMode: 'multiply' }} alt="Nissin solutions" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>Nissin Solutions</h4>

                        <p>Somos uma distribuidora e importadora de ferramentas de alta performance.  Ao longo de nossa história, firmamos parcerias com grandes marcas reconhecidas mundialmente.</p>

                        <p>Nosso modelo de negócio foi desenvolvido para atuar nas melhorias de processos, aplicando ferramentas e soluções inovadoras, sempre visando um ganho de produtividade, aumentando a performance e a competitividade de nossos clientes.</p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/ceratizit.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>Ceratizit</h4>

                        <p>Há mais de 95 anos, a CERATIZIT é pioneira no desenvolvimento de produtos de alta performance em metal duro para ferramentas de corte e proteção contra desgaste.</p>

                        <p>A empresa de propriedade privada, sediada em Mamer, Luxemburgo, desenvolve e fabrica ferramentas de corte em carboneto, altamente especializada em produtos para usinagem em todos os segmentos da indústria.</p>

                        <p>O GRUPO CERATIZIT tem a competência metalúrgica que permite controlar toda a cadeia de processo na produção de metal duro, desde a produção da matéria prima à preparação dos pós para sinterização e acabamento, desta forma, podemos fazer os ajustes corretos, a qualquer momento, e adaptarmos as propriedades do material às suas necessidades individuais.</p>

                        <p>Toda essa excelência na fabricação de ferramentas nos credencia a sermos seu Parceiro Confiável para soluções em usinagem.</p>

                        <p>Saiba mais sobre a Ceratizit: <a href="https://www.ceratizit.com" target="_blank">www.ceratizit.com</a></p>

                        <p>A NISSIN SOLUTIONS possui exclusividade de distribuição das nossas ferramentas para os estados de Santa Catarina e Paraná.</p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/osg.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>OSG</h4>

                        <p>A OSG é líder mundial na fabricação de ferramentas de corte como machos, brocas, fresas e laminadores. Oferecer a melhor qualidade, precisão e eficiência de nossos produtos são as principais preocupações ao fornecer ferramentas para a indústria de manufatura.  A OSG aproveita a habilidade técnica cultivada através de anos de experiência para desenvolver e fornecer aos nossos clientes produtos de alto valor agregado que atendam às suas necessidades, melhorando o seu processo e a qualidade dos produtos fabricados.</p>

                        <p>Saiba mais sobre a OSG: <a href="https://www.osg.com.br" target="_blank">www.osg.com.br</a></p>

                        <p>A NISSIN SOLUTIONS possui exclusividade de distribuição das nossas ferramentas para os estados de Santa Catarina e Paraná.</p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/hgt.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>HG Technology</h4>

                        <p>Fundada em Changhua Taiwan no ano 2002, inicia sua atividade com a produção totalmente voltada para grandes e conhecidas marcas japonesas e europeias, uma estratégia  comercial muito utilizada por grandes marcas.</p>

                        <p>Em 2004 com a aquisição da primeira máquina de alta tecnologia WALTER Grinding Machines, da Alemanha, iniciamos a fabricação da nossa marca HGT.</p>

                        <p>Nosso parque fabril é muito moderno e automatizado, contando inclusive com fabricação de ferramentas totalmente autônomas.</p>

                        <p>Atualmente estamos exportando nossas ferramentas para mais 30 países: Europa, Oriente Médio, Sudeste Asiático e Américas.</p>

                        <p>A NISSIN SOLUTIONS possui exclusividade de distribuição das nossas ferramentas para todo território brasileiro.</p>

                        <p>Saiba mais sobre a HG: <a href="https://www.hgt-endmills.com" target="_blank">www.hgt-endmills.com</a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/startool.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>StarTool</h4>

                        <p>A Startool está localizada em Seul, Coreia do Sul, é fabricante de fresas de metal duro.</p>

                        <p>Desde 2000, nos especializamos na fabricação de fresas de topo de qualidade, produzindo uma ampla seleção de produtos, nas quais se destacam a linha Blue.</p>

                        <p>Com a gama de diâmetros de 0,01mm a 20mm, a linha de fresas Blue, são muito aplicados em usinagem de longa duração e também são muito famosas pelo seu excelente desempenho em materiais endurecidos, com dureza até 68HRC.</p>

                        <p>A NISSIN SOLUTIONS possui exclusividade de distribuição das nossas ferramentas para todo território brasileiro.</p>

                        <p>Saiba mais sobre a StarTool: <a href="https://www.startool.co.kr " target="_blank">www.www.startool.co.kr</a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/spinwiser.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>Spinwaser</h4>

                        <p>WASERS: Spinwiser é uma plataforma de gerenciamento eletrônico e automatizada de estoque e uso de ferramentas para a indústria 4.0 que envolve tecnologias em hardware, software e BI.</p>

                        <p>Com uma interface segura e fácil de navegar, você terá controle total do consumo de itens cadastrados no sistema</p>

                        <p>Conheça essa Plataforma, que revolucionou a forma de controle, armazenagem e liberação de ferramentas.</p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/geotecno.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>GeoTecno</h4>

                        <p>A GeoTecno Soluções em Automação é uma empresa de tecnologia nacional localizada em Santa Bárbara d`Oeste – SP, e fornece soluções para a medição de ferramentas em processo (sistemas automáticos de presetting de ferramentas) e de medição de peças (sistemas apalpadores).</p>

                        <p>Criada em 2006 com a finalidade de desenvolver produtos inovadores com tecnologia totalmente nacional, visando possibilitar a Automação da Manufatura, em especial dos processos de usinagem.</p>

                        <p>Nosso desafio em Automação é desenvolver e criar tecnologia nacional acessível para as empresas de manufatura.</p>

                        <p>A NISSIN SOLUTIONS é a distribuidora especialista autorizada para os estados de Santa Catarina e Paraná.</p>

                        <p>Saiba mais sobre a Geotecno: <a href="https://www.geotecno.com.br">www.geotecno.com.br</a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/american.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>American</h4>

                        <p>Com atuação no mercado internacional, a América Hydraulics Solutions ganha destitute em soluções inovadoras, com baixo custo e alta rentabilidade no segmento de componentes hidráulicos para as indústrias em geral. Levar segurança, rendimento e eficiência é a principal missão. Conte com produtos que elevam o valor para seu negócio.</p>

                        <p>Com Know-how de mais de 20 anos de fabricação em sistemas de fixação automatizados, a American desenvolveu o seu sistema de fixação “ZERO POINT” Sistema de fixação super eficaz com redução de tempo em até 90% nos setup´s de peças.</p>

                        <p>A NISSIN SOLUTIONS é a distribuidora especialista autorizada para os estados de Santa Catarina e Paraná.</p>

                        <p>Saiba mais sobre a American: <a href="https://www.americanhydraulics.com.br ">www.americanhydraulics.com.br </a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>
            </div>
        </div>

        <Information />

        <Footer />
    </>
  )
}
