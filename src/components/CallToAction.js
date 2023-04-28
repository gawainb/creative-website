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
                    <h3>Try The Creative Platform Today &amp; <br/> Experience Endless Possibilities</h3>
                    <p>Brands get started with 2-months free!</p>
                    <a href="https://app.unlock-protocol.com/checkout?id=0c0b9948-f155-445e-9485-96b8d8b6bc6a" className="thm-btn cta-one__btn">Supercharge Your Business</a>
                </div>
            </Container>
        </section>
    )
}
export default CallToAction;