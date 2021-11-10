import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturesTwo = () => {
        return (
            <section className="cta-two" id="featuresTwo">
                <img src="img/shapes/cta-2-shape-1.png" alt="" className="cta-two__shape-1" />
                <img src="img/shapes/cta-2-shape-2.png" alt="" className="cta-two__shape-2" />
                <Container>
                    <img src="img/shapes/cta-2-shape-3.png" alt="" className="cta-two__shape-3" />
                    <img src="img/mocs/brands.png" alt="" className="cta-two__moc" />
                        <Row>
                            <Col xl={5} lg={6}>
                                <div className="cta-two__content">
                                    <div className="block-title text-left">
                                        <span className="block-title__bubbles"></span>
                                        <p>Create Direct with Brands</p>
                                        <h3>Discover the Powerful Tools to Boost Your Creative Career</h3>
                                    </div>

                                    <p>Boost your reputation, visibility, and fanbase by collaborating directly with the brands that you know and love.</p>
                                    <a href="#videoOne" data-target="#videoOne" className="thm-btn cta-two__btn scroll-to-target">Discover More</a>
                                </div>
                            </Col>
                        </Row>
                </Container>
            </section>
        )
}
export default FeaturesTwo;