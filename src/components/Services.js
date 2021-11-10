import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faBoxesStacked, faPenToSquare, faTruckRampBox, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

const free = <FontAwesomeIcon icon={faHandHoldingDollar} />
const unlimited = <FontAwesomeIcon icon={faBoxesStacked} />
const edit = <FontAwesomeIcon icon={faPenToSquare} />
const onRamp = <FontAwesomeIcon icon={faTruckRampBox} />
const royalties = <FontAwesomeIcon icon={faPiggyBank} />

const Services = () => {
        return (
            <section className="service-one" id="features">
                <Container>
                    <div className="block-title text-center">
                        <span className="block-title__bubbles"></span>
                        <p>Creative Platform Features</p>
                        <h3>The Only App You’ll Need</h3>
                    </div>
                    <Row>
                        <Col className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="000ms">
                            <div className="service-one__single">
                                <i>{free}</i>
                                <h3>Free Setup</h3>
                            </div>
                        </Col>

                        <Col className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="100ms">
                            <div className="service-one__single">
                                <i>{unlimited}</i>
                                <h3>Unlimited NFT Uploads</h3>
                            </div>
                        </Col>

                        <Col className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="200ms">
                            <div className="service-one__single">
                                <i>{edit}</i>
                                <h3>Pre-mint NFT Editing</h3>
                            </div>
                        </Col>

                        <Col className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="300ms">
                            <div className="service-one__single">
                                <i>{onRamp}</i>
                                <h3>Easy Fiat On-ramp</h3>
                            </div>
                        </Col>

                        <Col className="service-one__col wow fadeInUp" data-wow-duration="1500ms"
                             data-wow-delay="400ms">
                            <div className="service-one__single">
                                <i>{royalties}</i>
                                <h3>Daily NFT Royalties</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
}
export default Services;