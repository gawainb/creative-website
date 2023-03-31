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
                    <p>Brands get started with a free 3-month trial</p>
                    <a href="https://lnk.bio/crtv" className="thm-btn cta-one__btn">Coming Soon</a>
                </div>
            </Container>
        </section>
    )
}
export default CallToAction;