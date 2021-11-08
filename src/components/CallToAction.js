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
                    <h3>Try Our App Today &amp; <br/> Experience Endless Possibilities</h3>
                    <p>brands get started with a free 1 month trial</p>
                    <a href="#" className="thm-btn cta-one__btn">Open App</a>
                </div>
            </Container>
        </section>
    )
}
export default CallToAction;