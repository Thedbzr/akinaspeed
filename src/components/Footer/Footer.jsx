import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Instagram, Facebook, Twitter} from 'react-bootstrap-icons'

export default function Footer() {
    return (
        <>
            <div id="footerContainer" className="justify-content-center">
                <Row className="rowOne">
                    <Col>
                        <img
                            alt="AkinaSpeedLogo"
                            src="https://i.imgur.com/IMmZb8D.png"
                            height="45"
                            width="185"
                            className="mainLogo d-inline-block align-top"
                        />
                    </Col>
                </Row>
                <Row className="rowTwo">
                    <Col><p>Keeping Enthusiasts Engaged In The Tuner Scene One Part At A Time.</p></Col>
                </Row>
                <Row className="rowFour">
                <Col>&copy; {new Date().getFullYear()} Copyright: <a href="">AkinaSpeed.com </a></Col>
                </Row>
            </div>
        </>
    );
}