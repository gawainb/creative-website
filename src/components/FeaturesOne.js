import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faStore } from '@fortawesome/free-solid-svg-icons';

const cashRegister = <FontAwesomeIcon icon={faCashRegister} />
const store = <FontAwesomeIcon icon={faStore} />

const FeaturesOne = () => {
    return (
        <div className="cta-three">
            <img src="img/shapes/cta-1-shape-2.png" alt="" className="cta-three__shape-2" />
            <img src="img/shapes/cta-1-shape-3.png" alt="" className="cta-three__shape-3" />
            <Container>
                <img src="img/shapes/cta-1-shape-1.png" alt="" className="cta-three__shape-1" />
                <img src="img/mocs/marketplaces.png" alt="" className="cta-three__moc" />
                <div className="row justify-content-end">
                    <Col lg={6}>
                        <div className="cta-three__content">
                            <div className="block-title text-left">
                                <span className="block-title__bubbles"></span>
                                <p>Multi-Marketplace Features</p>
                                <h3>Control Everything From One Application</h3>
                            </div>
                            <div className="cta-three__box-wrap">
                                <div className="cta-three__box">
                                    <div className="cta-three__box-icon">
                                        <i>{store}</i>
                                    </div>
                                    <div className="cta-three__box-content">
                                        <h3>Mint To Multiple NFT Marketplaces</h3>
                                        <p>Achieve minting to multiple NFT marketplaces with the click of a single button.</p>
                                    </div>
                                </div>
                                <div className="cta-three__box">
                                    <div className="cta-three__box-icon">
                                        <i>{cashRegister}</i>
                                    </div>
                                    <div className="cta-three__box-content">
                                        <h3>Increase NFT Sale Royalties</h3>
                                        <p>Increase your NFT sale royalties by minting to all the major NFT marketplaces on multiple blockchains.</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="thm-btn cta-three__btn">Discover More</a>
                        </div>
                    </Col>
                </div>
            </Container>
        </div>
    )
}
export default FeaturesOne;