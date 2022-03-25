import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Banner = () => {

    return(
        <section className="banner-one" id="banner" style={{backgroundImage: `url(img/background/banner-bg-1-1.png)`}}>
            <img src="img/shapes/banner-shapes-1-1.png" alt="" className="banner-one__shape-1" />
            <img src="img/shapes/banner-shapes-1-2.png" alt="" className="banner-one__shape-2" />

            <img src="img/shapes/banner-shapes-1-4.png" alt="" className="banner-one__shape-4" />
            <img src="img/shapes/banner-shapes-1-5.png" alt="" className="banner-one__shape-5" />
            <img src="img/shapes/banner-shapes-1-6.png" alt="" className="banner-one__shape-6" />
            <img src="img/shapes/banner-shapes-1-7.png" alt="" className="banner-one__shape-7" />

            <Container>
                <img src="img/shapes/banner-shapes-1-3.png" alt="" className="banner-one__shape-moc-1"/>
                <img src="img/mocs/Creative_Concert.png" alt="" className="banner-one__moc" />
                <Row>
                    <Col lg={7}>
                        <div className="banner-one__content">
                            <p className="banner-one__tag-line">Welcome to Creative<a href="#">App Coming Soon</a></p>
                            <h3>The stage is <br/> <strong>YOURS</strong></h3>
                            <p>We are committed to providing Creators throughout the entertainment industry <br/> with DeFi tools, and NFTs with daily streaming royalties, while offering <br/>a
                            gamified structure to build “Star Power”, build fan base, gain reputation, <br/> and partnership fundings by participating in brand campaigns.</p>
                            <a href="#features" data-target="#features" className="thm-btn banner-one__btn scroll-to-target">Learn More</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner;