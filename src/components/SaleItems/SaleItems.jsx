import React from 'react';
import './SaleItems.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function SaleItems() {
    return (
        <>
            <main>
                <h2>EXCLUSIVE TOYOTA 86,FR-S,BRZ PERFORMANCE PARTS & ACCESSORIES! SIGN UP!</h2>
                <hr />
                <br />
                <h6>
                    Subaru BRZ, Scion FR-S, Toyota 86. The Twins come alive with performance parts and accesories from AkinaSpeed! We carry everything you need to unlock the next level of fun from these cars.
                    Loved by many enthusiasts not for their lack in power but for the rev happy Spirit these cars display. Slap on a turbocharger or a supercharger and you're well on your way to have a lot more smiles per gallon than you'd imagine.
                    Visually These cars are phenomenal take it from our boy Reggie-Mah and his NightRunner FR-S. Known for its aggressive yet functional look these cars are waiting to be modded. We have all you need and want here at AkinaSpeed.
                    So what are you waiting for go ahead and find your next mods.
                </h6>
                <br />
                <hr className="btmHr" />
                <Container className="saleGrid" id="slGrid">
                    <Row>
                        <Col><Link to="/login"><img src="https://i.imgur.com/QPE6Lq0.png" /></Link></Col>
                        <Col><Link to="/login"><img src="https://i.imgur.com/K6ELr9Y.png" /></Link></Col>
                        <Col><Link to="/login"><img src="https://i.imgur.com/QIhnCp0.png" /></Link></Col>
                    </Row>
                    <Row>
                        <Col className="btmRow"><Link to="/login"><img src="https://i.imgur.com/AHrkFbT.png" /></Link></Col>
                        <Col className="btmRow"><Link to="/login"><img src="https://i.imgur.com/TNGvbnk.png" /></Link></Col>
                        <Col className="btmRow"><Link to="/login"><img src="https://i.imgur.com/7jjmb0q.png" /></Link></Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}

