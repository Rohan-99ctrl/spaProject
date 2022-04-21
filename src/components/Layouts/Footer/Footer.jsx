import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';


const Footer = () => {


  return (

    <footer>
        <Container className='footerWrapper'>
            <Row>
                <Col md={ 3 } className='singleBlock'>
                    <h6>Purchase</h6>
                    <ul className="footerListWrapper">
                        <li><a href="">Products</a></li>
                        <li><a href="">Our Ads</a></li>
                        <li><a href="">Subscription</a></li>
                        <li><a href="">Asset Store</a></li>
                        <li><a href="">Resellers</a></li>
                    </ul>
                </Col>

                <Col md={ 3 } className='singleBlock'>
                    <h6>Education</h6>
                    <ul className="footerListWrapper">
                        <li><a href="">Students</a></li>
                        <li><a href="">Educator</a></li>
                        <li><a href="">Certification</a></li>
                        <li><a href="">Learn</a></li>
                        <li><a href="">Center of Excellence</a></li>
                    </ul>
                </Col>

                <Col md={ 3 } className='singleBlock'>
                    <h6>Download</h6>
                    <ul className="footerListWrapper">
                        <li><a href="">Get Unity</a></li>
                        <li><a href="">Download Archive</a></li>
                        <li><a href="">Beta Program</a></li>
                    </ul>
                </Col>

                <Col md={ 3 } className='singleBlock'>
                    <h6>Unity</h6>
                    <ul className="footerListWrapper">
                        <li><a href="">Our Company</a></li>
                        <li><a href="">Brands</a></li>
                        <li><a href="">Newsletter</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">Press</a></li>
                        <li><a href="">Partners</a></li>
                        <li><a href="">nvestors</a></li>
                        <li><a href="">Security</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>

        <p className='copyrightInfo'>Copyright &copy; 2022 Unity Technologies</p>
    </footer>

  )


}

export default Footer;