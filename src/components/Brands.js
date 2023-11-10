import React from 'react';
import Swiper from 'react-id-swiper';
import '../css/swiper/swiper.css';
import { Container } from 'react-bootstrap';


const Brands = () => {

    const params = {
        slidesPerView : 4,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            1499:{
                slidesPerView : 4
            },

            991:{
                slidesPerView : 3
            },

            767:{
                slidesPerView : 3

            },

            575:{
                slidesPerView : 2
            }
        }
        }
    return (
        <section className="brand-one brand-one__home-one">
            <Container>
                <div className="brand-one__carousel">
                <Swiper {...params}>
                    <div className="item">
                        <a href='https://metacartel.org'><img src="img/brand/metacartel.png" alt="metacartel"/></a>
                    </div>
                    <div className='item'>
                        <a href='https://livepeer.org'><img src='img/brand/livepeer.png' alt='livepeer' width={60}/></a>
                    </div>
                    <div className="item">
                        <a href='https://filecoin.io/'><img src="img/brand/filecoin.png" width={140} alt="filecoin"/></a>
                    </div>
                    <div className="item" style={{paddingTop: 20}}>
                        <a href='https://www.beehiiv.com/?via=crtv'><img src="img/brand/beehiiv_text.png" width={140} alt="Beehiiv"/></a>
                    </div>
                    <div className="item" style={{paddingTop: 12}}>
                        <a href='https://www.t-mobile.com/business' ><img src="img/brand/TFB.png" width={180} alt="T-Mobile"/></a>
                    </div>
                    <div className="item">
                        <a href='https://chain.link/'><img src="img/brand/white-chainlink.png" alt="chainlink"/></a>
                    </div>
                    <div className='item' style={{paddingTop: 12}}>
                        <a href='https://push.org'><img src='img/brand/Push-Logo-Standard-Dark.png' alt='PUSH.org' width={125}/></a>
                    </div>
                    <div className="item">
                        <a href='https://daohaus.fun'><img src="img/brand/daohaus.png" alt="daohaus"/></a>
                    </div>
                    <div className="item">
                       <a href='https://poap.xyz'><img src="img/brand/poap.png" alt="poap"/></a>
                    </div>
                    <div className="item">
                        <a href='https://polygon.technology'><img src="img/brand/polygon.png" alt="polygon"/></a>
                    </div>
                    <div className="item" style={{paddingTop: 20}}>
                        <a href='https://thirdweb.com'><img src="img/brand/Creative_Brands_New_York-Banner.png" width={180} alt="thirdweb"/></a>
                    </div>
                    <div className="item" style={{paddingTop: 10}}>
                        <a href='https://wert.io'><img src="https://wert.io/_next/static/media/logo.0cf3ee93.svg" width={100} alt="Wert"/></a>
                    </div>
                    <div className="item">
                        <a href='https://lens.dev'><img src="img/brand/Lens-web.png" alt="Lens Protocol"/></a>
                    </div>
                </Swiper>

                </div>
            </Container>
        </section>
    )
}
export default Brands;