import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Rating from './Rating';
import Stock from './Stock';
import Label from './Label';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import RouterApp from './routerApp';
import {Link} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import DetailPage from './DetailPage';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

    }

    componentDidMount() {
        axios
            .get(
                'https://recruitment.dev.rollingglory.com/api/v2/gifts?page[number]=1&page[size' +
                ']=6'
            )
            .then(response => {
                console.log(response.data.data);
                // this.setState({data: response.data.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        return (
            <Container fluid="xxl">
                <Row>
                    <Col className='bg-primary'>Company Logo</Col>
                </Row>
                <Row>
                    <Col className='bg-warning' sm={3}>
                        <h5>Filter</h5>
                        <Form>
                            {
                                ['checkbox'].map((type) => (
                                    <div key={`reverse-${type}`} className="mb-3">
                                        <Form.Check
                                            reverse="reverse"
                                            label="Rating 4 Keatas"
                                            name="group1"
                                            type={type}
                                            id={`reverse-${type}-1`}
                                            className="mr-10"/>
                                        <Form.Check
                                            reverse="reverse"
                                            label="Stock Tersedia"
                                            name="group1"
                                            type={type}
                                            id={`reverse-${type}-2`}/>

                                    </div>
                                ))
                            }
                        </Form>
                    </Col>
                    <Col className='bg-secondary' sm={9}>
                        <div className='d-flex flex-row justify-content-between align-items-center'>
                            <h5>Product Lists</h5>
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                <h4>Selected</h4>
                                <select class="form-select mx-5" id="inputGroupSelect01">
                                    <option value="1">Terbaru</option>
                                    <option value="2">Ulasan</option>
                                </select>
                            </div>
                        </div>

                        {this.state.data.map((dat, index) => (
                                    <Link to="/detail_page" className="link">
                                        <div key={index}>
                                            <Card
                                                style={{
                                                    width: '12rem'
                                                }}>
                                                <Label
                                                    rating={dat.attributes.rating}
                                                    numOfReviews={dat.attributes.numOfReviews}
                                                    isNew={dat.attributes.isNew}/>
                                                <Card.Text>
                                                    <Stock stock={dat.attributes.stock}/>
                                                </Card.Text>
                                                <Card.Img variant="top" src={dat.attributes.images}/>
                                                <Card.Body>
                                                    <Card.Title>{dat.attributes.name}</Card.Title>
                                                    <Card.Text>
                                                        {dat.attributes.points}
                                                        points
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <Rating rating={dat.attributes.rating}/> {dat.attributes.numOfReviews}
                                                        reviews
                                                    </Card.Text>
                                                    <div className="rounded-5 bg-danger">
                                                        <FaRegHeart/>
                                                    </div>

                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Link>
                                ))
                        }

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
