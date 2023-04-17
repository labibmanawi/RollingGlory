import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import ProductList from "./Productlist";

class App extends Component {
    render() {
        return (
            <Container fluid="xxl">
                <ProductList />
            </Container>
        );
    }
}

export default App;
