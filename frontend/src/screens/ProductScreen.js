import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image,ListGroup,Card} from 'react-bootstrap';
import Rating from '../components/Rating';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function ProductScreen({match}) {
    const classes = useStyles();
    // const product = products.find(p => p._id === match.params.id);

    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchProducts(){
            const {data} = await axios.get(`/api/product/${match.params.id}`);
            setProduct(data);
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <Link to='/'>
                <Tooltip className='my-2' title="Back"><IconButton aria-label="delete"><ArrowBackIcon /></IconButton></Tooltip>
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: MUR{product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <ListGroup variant=''>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>MUR {product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    {/*<strong>In Stock</strong>*/}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className='btn-block' variant="contained" disabled={!product.countInStock > 0} startIcon={<ShoppingCartIcon />}>Add to Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </div>
    );
}

export default ProductScreen;