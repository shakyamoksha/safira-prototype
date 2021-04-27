import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product.js'
// import products from "../products";
import axios from "axios";

function Dashboard() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // console.log('useEffect triggered!');

        async function fetchProducts(){
            const {data} = await axios.get('/api/products/');
            setProducts(data);
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <h1 className='p-1'>Latest Products</h1>

            <Row>
                {products.map(data => (
                    <Col key={data._id} sm={12} md={6} lg={4} xl={3}>
                        <Product data={data}/>
                    </Col>
                ))}
            </Row>

        </div>
    );
}

export default Dashboard;