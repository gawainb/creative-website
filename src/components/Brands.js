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
                    <div className="item">
                        <a href='https://filecoin.io/'><img src="img/brand/filecoin.png" alt="filecoin"/></a>
                    </div>
                    <div className="item">
                        <a href='https://chain.link/'><img src="img/brand/white-chainlink.png" alt="chainlink"/></a>
                    </div>
                    <div className="item">
                        <a href='https://daohaus.club'><img src="img/brand/daohaus.png" alt="daohaus"/></a>
                    </div>
                    <div className="item">
                       <a href='https://poap.xyz'><img src="img/brand/poap.png" alt="poap"/></a>
                    </div>
                    <div className="item">
                        <a href='https://polygon.technology'><img src="img/brand/polygon.png" alt="polygon"/></a>
                    </div>
                    <div className="item">
                        <a href='https://docs.textile.io'><img src="img/brand/textile.png" alt="textile"/></a>
                    </div>
                    <div className="item">
                        <a href='https://urbanuprisecrew.com'><img src="img/brand/UUC.png" alt="Urban Uprise Crew"/></a>
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