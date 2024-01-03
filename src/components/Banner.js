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
                <Row>
                    <Col lg={7}>
                        <div className="banner-one__content">
                            <p className="banner-one__tag-line">Welcome to Creative<a href="https://app.creativeplatform.xyz/">🎉 GET STARTED</a></p>
                            <h3>The stage is <br/> <strong>YOURS</strong></h3>
                            <h4>Join the movement that's creating a revolutionary way of connecting Creators, Brands and their Fans. A more fair, transparent, and fun ecosystem for everyone.</h4>
                            <a href="#features" data-target="#features" className="thm-btn banner-one__btn scroll-to-target">Learn More</a>
                        </div>
                    </Col>
                </Row>
                    <iframe width='auto' height="480" src="https://lvpr.tv?v=ed401mvzp9c9z8gq" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" sandbox="allow-scripts" className="banner-one__moc" />
                </Container>
        </section>
    )
}
export default Banner;
