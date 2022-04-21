import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {


    const [teamData, setTeamData] = useState([]);

    const handleTeamDelete = (id) => {

        axios.delete(`http://localhost:6060/developer/${id}`).then(response => {



        }).catch(err => {
            console.log(err);
        })

    }

    useEffect(() => {

        axios.get('http://localhost:6060/developer').then((response) => {

            setTeamData(response.data);

        }).catch((err) => {
            console.log(err);
        })

    }, [teamData]);


  return (
    <>
        <section className='adminPanelWrapper'>
            <Container>
                <Row className='mb-4'>
                    <Col>
                        <Card className='shadow adminWelcomeDetail'>
                            <Card.Body>
                                <h1>Welcome to admin panel!!!</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perferendis doloribus, pariatur consequuntur error eos qui dicta officia provident debitis!</p>
                                <Link to="/adddeveloper" className='btn btn-primary mb-2'>ADD MORE</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className=''>
                    <Col>
                        <Card className='shadow adminTableWrapper'>
                            <Card.Body>
                                
                                <table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>E-mail</th>
                                            <th>Phone</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {
                                            teamData.map((data, index) => 

                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{data.nam}</td>
                                                <td>{data.address}</td>
                                                <td>{data.email}</td>
                                                <td>{data.phone}</td>
                                                <td>
                                                    <Link to={ `/profile/${data.username}` } className='btn btn-primary btn-sm'><i class='bx bxs-show' ></i></Link>&nbsp;
                                                    <Link to={ `/editDevs/${data.username}`} className='btn btn-info btn-sm'><i class='bx bxs-edit' ></i></Link>&nbsp;
                                                    <Button onClick={ () => handleTeamDelete(data.id) } className='btn btn-danger btn-sm'><i class='bx bxs-trash' ></i></Button>
                                                </td>
                                            </tr>

                                            )
                                        }

                                    </tbody>
                                </table>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )

}

export default Admin;