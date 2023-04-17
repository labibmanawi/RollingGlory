import React, {Component} from "react";
import Form from 'react-bootstrap/Form';

class Filter extends Component {
    render() {
        return (
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
        );
    }

}

export default Filter;