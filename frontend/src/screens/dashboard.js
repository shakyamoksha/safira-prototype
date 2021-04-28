import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product'
import Loader from '../components/loader'
import Message from '../components/message'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {listProducts} from "../actions/productActions";

export default function Dashboard() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {error, loading, products} = productList;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <div>
            <h1 className='p-1'>Latest Products</h1>
            {loading ? <Loader/> :
                error ? <Message severity={'error'} children={error}/> :
                    <Row>
                        {products.map(data => (
                            <Col key={data._id} sm={12} md={6} lg={4} xl={3}>
                                <Product data={data}/>
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    );
}
