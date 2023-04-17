import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from './Rating';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import Label from './Label';
import axios from 'axios';
import Stock from './Stock';
import Header from "./Header";
import Form from 'react-bootstrap/Form';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            sortOption: ''
        };

    }

    componentDidMount() {
        axios
            .get(
                'https://recruitment.dev.rollingglory.com/api/v2/gifts?page[number]=1&page[size' +
                ']=6'
            )
            .then(response => {
                // console.log(response.data.data);
                this.setState({data: response.data.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSortOptionChange = (event) => {
        const sortOption = event.target.value;

        if (sortOption === 'asc') {
            this.setState({
                data: this
                    .state
                    .data
                    .sort((a, b) => a.attributes.rating - b.attributes.rating)
            });
        } else if (sortOption === 'desc') {
            this.setState({
                data: this
                    .state
                    .data
                    .sort((a, b) => b.attributes.rating - a.attributes.rating)
            });
        }

        this.setState({sortOption});
    }

    render() {
        const {data, sortOption} = this.state;
        return (
            <div>
            <Row>
                <Header/>
            </Row>
            <Row>
                <Col sm={3}>
                    <div className="border border-left-20">
                        <h5 className="border border-bottom-20">Filter</h5>
                        <div className="d-flex justify-content-around">
                            <p>Rating 4 Keatas</p>
                            <Form.Check aria-label="option 1" />
                        </div>
                        <div className="d-flex justify-content-around">
                            <p>Stock Tersedia</p>
                            <Form.Check aria-label="option 1" />
                        </div>
                    </div>
                </Col>
                <Col sm={9}>
                    <div>
                        <div className='d-flex flex-row justify-content-between align-items-center'>
                            <h5>Product Lists</h5>
                            <div class="d-flex flex-row justify-content-between align-items-center">
                                <h4>Selected</h4>
                                <select
                                    class="form-select mx-5"
                                    id="inputGroupSelect01"
                                    value={sortOption}
                                    onChange={this.handleSortOptionChange}>
                                    <option value="asc">Terbaru</option>
                                    <option value="desc">Ulasan</option>
                                </select>
                            </div>
                        </div>

                        <div className='border border-left-20 d-flex flex-wrap'>
                            <Link to="/detail_page" className="link">gidah</Link>
                            {
                                this.state.data.map((dat, index) => (
                                        <Link to="/detail_page" className="link">
                                            <div key={index}>
                                                <Card
                                                    className="m-3 p-2"
                                                    style={{
                                                        width: '12rem'
                                                    }}>
                                                    <Label
                                                        rating={dat.attributes.rating}
                                                        numOfReviews={dat.attributes.numOfReviews}
                                                        isNew={dat.attributes.rating}/>
                                                    <Card.Text>
                                                        <Stock stock={dat.attributes.stock}/>
                                                    </Card.Text>
                                                    <Card.Img variant="top" src={dat.attributes.images} height="200px"/>
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
                        </div>
                    </div>
                </Col>

            </Row>
            </div>
        );
    }

}

export default ProductList;