import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {



  return (
    
    <header className='shadow'>
        <Container>
            <Row>
                <Col md={ 3 } id="brandWrapper" style={{display: 'flex',justifyContent: 'left',alignItems: 'center'}}>
                    <a id="brand" href="#"><i className='bx bxl-unity'></i></a>
                    <h1>Unity</h1>
                </Col>

                <Col md={ 9 } id="rightNavIconWrapper" style={{display: 'flex',justifyContent: 'right',alignItems: 'center'}}>
                    <ul className="menuWrapper text-right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/admin">Dashboard</Link></li>
                        <li><Link to="/team">Our Teams</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/adddeveloper">Add Developer</Link></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </header>

  )

}

export default Header;