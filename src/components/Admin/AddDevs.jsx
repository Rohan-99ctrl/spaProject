import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AddDevs.css';

const AddDevs = () => {


    const [post, setPost] = useState({
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

    // get form data

    const {nam, username, skill, phone, address, email, website, facebook, instagram, twitter, linkedin, upwork, detailText, photo} = post;

    const handleFormSubmit = () => {

        axios.post(`http://localhost:6060/developer/`, {
            nam           : nam,
            username      : username,
            skill         : skill,
            phone         : phone,
            address       : address,
            email         : email,
            website       : website,
            facebook      : facebook,
            instagram     : instagram,
            twitter       : twitter,
            linkedin      : linkedin,
            upwork        : upwork,
            detailText    : detailText,
            photo         : photo
        }).then((response) => {

            setPost({
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
            })

        }).catch((err) => {
            console.log(err);
        })

    };



  return (
    <section className='mainAddSecWrapper'>
        <Container>
            <Row className='shadow formWrapper'>
                <Col className='leftInfo' md={ 6 }>
                    <Card>
                        <Card.Body>
                            <h2 className='mb-4'>Your Informations</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, blanditiis? Doloremque minima rerum quam laudantium, officiis recusandae, magni repellendus fuga adipisci dignissimos alias neque consequatur dolores nesciunt modi tenetur quisquam.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, blanditiis? Doloremque minima rerum quam laudantium, officiis recusandae, magni repellendus fuga adipisci dignissimos alias neque consequatur dolores nesciunt modi tenetur quisquam.Doloremque minima rerum quam laudantium, officiis recusandae, magni repellendus fuga adipisci dignissimos alias neque consequatur dolores nesciunt modi tenetur quisquam. Magni repellendus fuga adipisci dignissimos alias neque consequatur dolores nesciunt modi tenetur quisquam.Doloremque minima rerum quam laudantium, officiis recusandae, fuga adipisci dignissimos fuga adipisci dignissimos alias alias neque consequatur dolores nesciunt modi tenetur quisquam.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex nobis ullam sunt, ducimus quos assumenda sint natus aliquid? At ratione nostrum reiciendis quaerat vitae dolorem aliquam ut, accusantium nemo?</p>
                            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis id sunt veritatis similique in harum.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis id sunt veritatis similique in harum.</p>
                            <Link to="/team" className='btn btn-primary postBtn'>BACK TO PREVIOUS PAGE</Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='rightInfo' md={ 6 }>
                    <Card>
                        <Card.Body>
                            <h2 className='mb-4'>Submit Your Informations</h2>
                            <Form onSubmit={ handleFormSubmit } className='formBlock'>
                                <div className="my-3">
                                    <Row>
                                        <Col md={ 6 }>
                                            <Form.Label>Write your name :</Form.Label>
                                            <Form.Control value={ nam } onChange={ (e) => { setPost({ ...post, nam : e.target.value }) } } type='text' />
                                        </Col>

                                        <Col md={ 6 }>
                                            <Form.Label>Write your username :</Form.Label>
                                            <Form.Control value={ username } onChange={ (e) => { setPost({ ...post, username : e.target.value }) } } type='text' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="my-3">
                                    <Row>
                                        <Col>
                                            <Form.Label>Write your e-mail :</Form.Label>
                                            <Form.Control value={ email } onChange={ (e) => { setPost({ ...post, email : e.target.value }) }} type='text' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="my-3">
                                    <Row>
                                        <Col md={ 6 }>
                                            <Form.Label>Write your cell number :</Form.Label>
                                            <Form.Control value={ phone } onChange={ (e) => { setPost({ ...post, phone : e.target.value }) } } type='number' />
                                        </Col>

                                        <Col md={ 6 }>
                                            <Form.Label>Write your home address :</Form.Label>
                                            <Form.Control value={ address } onChange={ (e) => { setPost({ ...post, address : e.target.value }) } } type='text' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="my-3">
                                    <Row>
                                        <Col md={ 6 }>
                                            <Form.Label>Photo :</Form.Label>
                                            <Form.Control value={ photo } onChange={ (e) => { setPost({ ...post, photo : e.target.value }) } } type='text' />
                                        </Col>

                                        
                                        <Col md={ 6 }>
                                            <Form.Label>Write your skills :</Form.Label>
                                            <Form.Control value={ skill } onChange={ (e) => { setPost({ ...post, skill : e.target.value }) } } type='text' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="my-3">
                                    <h5 style={{ margin: '25px 0px' }} >Optional Information</h5>
                                    <Row>
                                        <Col md={ 4 }>
                                            <Form.Label>Your website link :</Form.Label>
                                            <Form.Control value={ website } onChange={ (e) => { setPost({ ...post, website : e.target.value }) } } type='text' />
                                        </Col>


                                        <Col md={ 4 }>
                                            <Form.Label>Facebook :</Form.Label>
                                            <Form.Control value={ facebook } onChange={ (e) => { setPost({ ...post, facebook : e.target.value }) } } type='text' />
                                        </Col>

                                        <Col md={ 4 }>
                                            <Form.Label>Instagram :</Form.Label>
                                            <Form.Control value={ instagram } onChange={ (e) => { setPost({ ...post, instagram : e.target.value }) } } type='text' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="my-3">
                                    <Row>
                                        <Col md={ 4 }>
                                            <Form.Label>Twitter :</Form.Label>
                                            <Form.Control value={ twitter } onChange={ (e) => { setPost({ ...post, twitter : e.target.value }) } } type='text' />
                                        </Col>

                                        <Col md={ 4 }>
                                            <Form.Label>Linkedin :</Form.Label>
                                            <Form.Control value={ linkedin } onChange={ (e) => { setPost({ ...post, linkedin : e.target.value }) } } type='text' />
                                        </Col>

                                        <Col md={ 4 }>
                                            <Form.Label>Upwork :</Form.Label>
                                            <Form.Control value={ upwork } onChange={ (e) => { setPost({ ...post, upwork : e.target.value }) } } type='text' />
                                        </Col>
                                    </Row>
                                </div>
                                
                                <div className="my-3">
                                    <Form.Label>Write some text about :</Form.Label>
                                    <Form.Control as="textarea" rows={ 3 } value={ detailText } onChange={ (e) => { setPost({ ...post, detailText : e.target.value }) } } />
                                </div>

                                <div className="my-3">
                                    <Button type='submit' className='w-100 mt-2'>SUBMIT</Button>
                                </div>
                            </Form>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )


}




export default AddDevs;