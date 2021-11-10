import React,{ Component } from 'react';
import ModalVideo from 'react-modal-video';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const play = <FontAwesomeIcon icon={faPlay} />

export default class Video extends Component {
    constructor(){
        super()
        this.state = {
            isOpen: false
        }
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render(){
        return (
            <section className="video-one" id="videoOne">
                <Container>
                    <div className="video-one__box wow fadeInUp" data-wow-duration="1500ms">
                        <img src="img/resources/Creative_large-Concert.png" alt="" />
                            <div className="video-one__content">
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='JcJYXfEf7mA' onClose={() => this.setState({isOpen: false})} />
                                <div onClick={this.openModal} className="video-popup"><i
                                    >{play}</i></div>
                                <h3>Watch Our Video</h3>
                            </div>
                    </div>
                </Container>
            </section>
        )
    }
}