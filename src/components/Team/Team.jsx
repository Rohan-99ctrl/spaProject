import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = () => {

    const [team, setTeam] = useState([]);


    useEffect(() => {

        axios.get('http://localhost:6060/developer').then((response) => {

            setTeam(response.data);

        }).catch((error) => {
            console.log(error);
        });

    },[team]);


  return (
    <section className='teamSecWrapper'>
        <Container>

          <h1>Our Teams</h1>

            <Row>

                {
                    team.map((data) => 

                        <Col className='mb-4' md={ 4 }>
                            <Card className="shadow teamWrapper">
                                <Card.Body>
                                    <Card.Img src={ data.photo }/>

                                    <h5>{ data.nam } <span style={{ fontSize:'14px' }}><i class='bx bxs-badge-check'></i></span></h5>
                                    <p className='teamDeatilText'>{ data.detailText }</p>
                                    <Button className='post'>0 Posts</Button> 
                                    <Link to={ `/profile/${data.username}` } className='btn btn-primary viewProfile'>View Profile</Link>
                                </Card.Body>

                                <div className="socialWrapper">
                                    <a href={ data.facebook }><i class='bx bxl-facebook'></i></a>
                                    <a href={ data.instagram }><i class='bx bxl-instagram' ></i></a>
                                    <a href={ data.twitter }><i class='bx bxl-twitter' ></i></a>
                                    <a href={ data.linkedin }><i class='bx bxl-linkedin' ></i></a>
                                    <a href={ data.upwork }><i class='bx bxl-upwork' ></i></a>
                                </div>
                            </Card>
                        </Col>

                    )
                }

                
            </Row>
        </Container>
    </section>
  )

  
}



export default Team;