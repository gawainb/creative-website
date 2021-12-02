import React from 'react';
import { Container } from 'react-bootstrap';

const Faq = () => {
        return (

            <section className="faq-one">
                <img src="img/shapes/faq-shape-1.png" alt="" className="faq-one__shape-1"/>
                <img src="img/shapes/faq-shape-2.png" alt="" className="faq-one__shape-2"/>
                <img src="img/shapes/faq-shape-3.png" alt="" className="faq-one__shape-3"/>
                <Container>
                    <div className="block-title text-center">
                        <span className="block-title__bubbles"></span>
                        <p>Frequently Asked Questions</p>
                        <h3>Have any Question?</h3>
                    </div>
                    <div className="accrodion-grp wow fadeIn faq-accrodion animated">
                        <div className="accrodion">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>What is an NFT, and how is it valued?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>An NFT, or a Non-Fungible Token, is a digital representation of stored information on the blockchain that is verified and traceable to an individual owner. With an NFT, you essentially own a piece of digital space that can be represented as: an image, a song, a video, a document, a contract, or even a payment transaction!</p> 
                                        <p>To give the NFT value, you would have to “mint” the NFT on-chain first. Many individuals would think that is a difficult task, but on the Creative platform it's no more challenging than uploading an attachment for email, or posting an image on Instagram.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion  ">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>How do I join Creative platform, and what do I get by joining? (Becoming a Member)</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>The first would be to joining our community via Creative Discord. In our server, you will be able to view various tabs of interest to you as a fan, creator, or brand representative and join in open discussions.</p> 
                                        <p>Once you've established credibility within our server. The facilitation of chats, audio rooms, weekly meetings, and live broadcasts/podcasts are all under way and will underpin the significance of what our COMMS team at Creative can do for your vision, idea, and audience. Basically, you're in the fold with us at this stage!!</p>
                                        <p>Now most folks may only want to know what Creative is doing for particular contests or giveaways, but mostly we want to offer less gimmick and game, and more profit and exchange. Meaning — The Stage Is Yours! The community itself may have designated roles which have various color codes to identify moderators, developers, etc. The development team is constantly coming up with new ideas to connect with the right partners that will offer gift incentives with premium/exclusive events, honor members in our Creative community through attendance, as well as selecting winners through a tested, verifiable randomization function during raffles.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion ">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>What's A POAP?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>A POAP is a digital collectible (badge) created in the form of an NFT (non-fungible token) powered by the blockchain. Creative has found a use for POAPs to create collectibles and serve as PROOF OF ATTENDANCE for events. These limited NFTs can or may only be received through randomized raffles, event-first come first serve, or through trade from other eligible sources. See more information,<a href="https://poap.xyz"> POAP.xyz</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion ">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>What does a creative do on the Creative platform?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>A creative artist will find that Creative platform has many features that stand out from other NFT platforms. One feature is the ability to mint your NFTs to OpenSea, or Rarible with a single click. These are marketplaces for collectors who want to “purchase” your creative works. As the demand within the community grows for any particular NFT, it in turn raises the creator's profile reputation and value perceived;  Community members will eventually be able to HODL social tokens that interact within the network of the Creative's partners and infrastructure.  So in essence, what ever that artist contributes as an NFT, now can be sold directly to larger marketplaces and leverage the value of its scarcity.</p>
                                        <p>To a professional songwriter, publishing is everything. It's how you determine legacy and royalties for generations to come. Not having direct access to your streaming royalties can hinder you from making sound decisions about your career today and later on, but no longer to fear! Creative has integrated with top protocols to continue having the ability to show creators how to publish directly to a blockchain, using free or minimal fee minting options, record their experience, and share in the rewards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        )
}
export default Faq;