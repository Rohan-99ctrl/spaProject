import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './AddDevs.css';

const EditDev = () => {
    
    const { username } = useParams();

    const [edit, setEdit] = useState({
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




    useEffect(() => {

        axios.get(`http://localhost:6060/developer?username=${username}`).then((response) => {

            setEdit({
                ...response.data[0]
            });

        }).catch(err => {
            console.log(err);
        })

    }, [username])


    // const [doneEdit, setDoneEdit] = useState({
    //     nam           : '',
    //     username      : '',
    //     skill         : '',
    //     phone         : '',
    //     address       : '',
    //     email         : '',
    //     website       : '',
    //     facebook      : '',
    //     instagram     : '',
    //     twitter       : '',
    //     linkedin      : '',
    //     upwork        : '',
    //     detailText    : '',
    //     photo         : ''
    // })

    const handleEditDataSubmit = (event) => {

        event.preventDefault();
        console.log(edit)

            axios.patch(`http://localhost:6060/developer?username=${username}`, {
                nam           : edit.nam,
                username      : edit.username,
                skill         : edit.skill,
                phone         : edit.phone,
                address       : edit.address,
                email         : edit.email,
                website       : edit.website,
                facebook      : edit.facebook,
                instagram     : edit.instagram,
                twitter       : edit.twitter,
                linkedin      : edit.linkedin,
                upwork        : edit.upwork,
                detailText    : edit.detailText,
                photo         : edit.photo
            }).then((response) => {

                setEdit({
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

            }).catch(err => {
                console.log(err);
            })

    }

    
    // const {nam, username, skill, phone, address, email, website, facebook, instagram, twitter, linkedin, upwork, detailText, photo} = doneEdit;



  return (
    <section className='mainAddSecWrapper'>
        <Container>
            <Row className='shadow formWrapper'>
                <Col className='leftInfo' md={ 6 }>
                    <Card>
                        <Card.Body>
                            <h2 className='mb-4'>How to edit your Informations?</h2>
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
                            <h2 className='mb-4'>Edit Your Informations</h2>
                            <Form method='POST' onSubmit={ e => handleEditDataSubmit(e) } className='formBlock'>
                                <div className="my-3">
                                    <Row>
                                        <Col md={ 6 }>
                                            <Form.Label>Write your name :</Form.Label>
                                            <Form.Control value={ edit.nam } onChange={ (e) => { setEdit({ ...edit, nam : e.target.value }) } } type='text' />
                                        </Col>

                                        <Col md={ 6 }>
                                            <Form.Label>Write your username :</Form.Label>
                                            <Form.Control value={ edit.username } onChange={ (e) => { setEdit({ ...edit, username : e.target.value }) } } type='text' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="my-3">
                                    <Row>
                                        <Col>
                                            <Form.Label>Write your e-mail :</Form.Label>
                                            <Form.Control value={ edit.email } onChange={ (e) => { setEdit({ ...edit, email : e.target.value }) } } type='text' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="my-3">
                                    <Row>
                                        <Col md={ 6 }>
                                            <Form.Label>Write your cell number :</Form.Label>
                                            <Form.Control value={ edit.phone } type='number' />
                                        </Col>

                                        <Col md={ 6 }>
                                            <Form.Label>Write your home address :</Form.Label>
                                            <Form.Control value={ edit.address } type='text' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="my-3">
                                    <Row>
                                        <Col md={ 6 }>
                                            <Form.Label>Photo :</Form.Label>
                                            <Form.Control value={ edit.photo } type='text' />
                                        </Col>


                                        <Col md={ 6 }>
                                            <Form.Label>Write your skills :</Form.Label>
                                            <Form.Control value={ edit.skill } type='text' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="my-3">
                                    <h5 style={{ margin: '25px 0px' }} >Optional Information</h5>
                                    <Row>
                                        <Col md={ 4 }>
                                            <Form.Label>Your website link :</Form.Label>
                                            <Form.Control value={ edit.website } type='text' />
                                        </Col>

                                        <Col md={ 4 }>
                                            <Form.Label>Facebook :</Form.Label>
                                            <Form.Control value={ edit.facebook } type='text' />
                                        </Col>

                                        <Col md={ 4 }>
                                            <Form.Label>Instagram :</Form.Label>
                                            <Form.Control value={ edit.instagram } type='text' />
                                        </Col>
                                    </Row>
                                </div>

                                <div className="my-3">
                                    <Row>
                                        <Col md={ 4 }>
                                            <Form.Label>Twitter :</Form.Label>
                                            <Form.Control value={ edit.twitter } type='text' />
                                        </Col>

                                        <Col md={ 4 }>
                                            <Form.Label>Linkedin :</Form.Label>
                                            <Form.Control value={ edit.linkedin } type='text' />
                                        </Col>

                                        <Col md={ 4 }>
                                            <Form.Label>Upwork :</Form.Label>
                                            <Form.Control value={ edit.upwork } type='text' />
                                        </Col>
                                    </Row>
                                </div>
                                
                                <div className="my-3">
                                    <Form.Label>Write some text about :</Form.Label>
                                    <Form.Control as="textarea" rows={ 3 } value={ edit.detailText } />
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




export default EditDev;