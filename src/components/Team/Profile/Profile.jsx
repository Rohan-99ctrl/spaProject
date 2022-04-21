import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Profile.css';


const Profile = () => {

    // get user params
    const { username } = useParams();

    // devs single profile data

    const [profile, setProfile] = useState({
            id            : '',
            nam           : '',
            username      : '',
            skill         : '',
            phone         : '',
            address       : '',
            email         : '',
            website       : '',
            facebook      : '',
            instagram     : '',
            twitter       : '',
            linkedin      : '',
            upwork        : '',
            detailText    : '',
            photo         : ''
    });

    console.log(profile);
    

    // const {nam, skill, phone, address, email, website, facebook, instagram, twitter, linkedin, upwork, detailText, photo} = profile;

    useEffect(() => {

        axios.get(`http://localhost:6060/developer?username=${username}`).then((response) => {

            setProfile({
                ...response.data[0]
            });
            
            console.log(response.data[0]);


        }).catch((err) => {
            console.log(err);
        })

    }, [profile]);


  return (
    <section className='profileSecWrapper'>
        <Container>
            <Row>
                <Col md={ 4 }>
                    <Card className='profileWrapper'>
                        <Card.Body>
                            <Card.Img className='mb-3' src={ profile.photo }/>

                            <p className='profileDetailText'>{ profile.detailText }</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={ 8 }>
                    <Card className='profileWrapper'>
                        <Card.Body>
                            <h2>{ profile.nam } <span className="badgeWrapper"><i class='bx bxs-badge-check'></i></span> </h2>
                            <h6><span>{ profile.skill }</span></h6>
                            <p>RANKINGS</p>
                            <h4>
                              8.6 
                              <ul className='starWrapper'>
                                  <li><a href="#rating"><i class='bx bxs-star'></i></a></li>
                                  <li><a href="#rating"><i class='bx bxs-star'></i></a></li>
                                  <li><a href="#rating"><i class='bx bxs-star'></i></a></li>
                                  <li><a href="#rating"><i class='bx bxs-star'></i></a></li>
                                  <li><a href="#rating"><i class='bx bx-star' ></i></a></li>
                              </ul>
                            </h4>

                            <div className="btnWrapper">
                                <a href="#btn"><i class='bx bxs-envelope'></i> Send Message</a>
                                <a href="#btn"><i class='bx bxs-contact' ></i> Contact</a>
                                <a href="#btn"><i class='bx bxs-report' ></i> Report</a>
                            </div>

                            <div className="aboutBtnWrapper">
                                <a href="#btn"><i class='bx bxs-user-pin' ></i>Your Posts</a>
                                <a href="#" className='active'><i class='bx bxs-user-pin' ></i> About</a>
                                <a href="#"><i class='bx bxs-user-pin' ></i> Photos</a>
                                <a href="#"><i class='bx bxs-user-pin' ></i> Friends</a>
                            </div>

                            <h5>Your Infotmations</h5>
                            
                            <div className="detailWrapper">
                                <Row>
                                    <Col md={ 3 }>
                                      <p>Phone No.</p>
                                    </Col>

                                    <Col md={ 9 }>
                                        : <a href='#numb'> { profile.phone }</a>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={ 3 }>
                                      <p>Your Address</p>
                                    </Col>

                                    <Col md={ 9 }>
                                        : <a href='#address'> { profile.address }</a>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={ 3 }>
                                      <p>E-mail Address</p>
                                    </Col>

                                    <Col md={ 9 }>
                                        : <a href='#address'> { profile.email }</a>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={ 3 }>
                                      <p>Website</p>
                                    </Col>

                                    <Col md={ 9 }>
                                        : <a href={ profile.website }> { profile.website }</a>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={ 3 }>
                                      <p>Facebook Profile</p>
                                    </Col>

                                    <Col md={ 9 }>
                                        : <a className='socialBtn' href={ profile.facebook }><i class='bx bxl-facebook-square'></i></a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ 3 }>
                                      <p>Instagram Profile</p>
                                    </Col>

                                    <Col md={ 9 }>
                                        : <a className='socialBtn' href={ profile.instagram }><i class='bx bxl-instagram-alt' ></i></a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ 3 }>
                                      <p>Twitter Profile</p>
                                    </Col>

                                    <Col md={ 9 }>
                                        : <a className='socialBtn' href={ profile.twitter }><i class='bx bxl-twitter' ></i></a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={ 3 }>
                                      <p>Linkedin Profile</p>
                                    </Col>

                                    <Col md={ 9 }>
                                        : <a className='socialBtn' href={ profile.linkedin }><i class='bx bxl-linkedin' ></i></a>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={ 3 }>
                                      <p>Upwork Profile</p>
                                    </Col>

                                    <Col md={ 9 }>
                                        : <a className='socialBtn' href={ profile.upwork }><i class='bx bxl-upwork' ></i></a>
                                    </Col>
                                </Row>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )

}

export default Profile;