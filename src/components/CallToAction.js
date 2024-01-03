import React,{ Component } from 'react';
import Container from 'react-bootstrap/Container'

const CallToAction = () => {
    return (

        <section className="cta-one">
            <Container>
                <div className="cta-one__circle-1"></div>
                <div className="cta-one__circle-2"></div>
                <div className="cta-one__circle-3"></div>
                <div className="cta-one__content text-center">
                    <h3>Try The Creative Today &amp; <br/> Experience Endless Possibilities</h3>
                    <p>Brands get started with 3-months free!</p>
                    <a href="https://app.creativeplatform.xyz" className="thm-btn cta-one__btn">Supercharge Your Business</a>
                </div>
            </Container>
        </section>
    )
}
export default CallToAction;