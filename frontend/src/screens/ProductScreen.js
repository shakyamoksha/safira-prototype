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
import {useDispatch, useSelector} from "react-redux";
import {listProductDetails} from "../actions/productActions";
import Loader from "../components/loader";
import Toastr from "../components/toastr";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function ProductScreen({match, history}) {
    const classes = useStyles();

    const[qty, setQty] = useState(1);

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const {error, loading, product} = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match]);

    const addToCartHandler = () => {
        console.log('addToCart', match.params.id);
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <div>
            <Link to='/'>
                <Tooltip className='my-2' title="Back"><IconButton aria-label="delete"><ArrowBackIcon /></IconButton></Tooltip>
            </Link>

            {loading ? <Loader/> :
                error ? <Toastr severity={'error'} children={error}/> :

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

                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col className='py-3'>Quantity:</Col>
                                            <Col>
                                                <FormControl fullWidth={false} className={classes.formControl}>
                                                    {/*<InputLabel id="quantity-select-label">Quantity</InputLabel>*/}
                                                    <Select labelId="quantity-select-label" id="quantity-select" value={qty} onChange={e => setQty(e.target.value)}>
                                                        {[...Array(product.countInStock).keys()].map(x =>(
                                                            <MenuItem key={x+1} value={x+1}>{x+1}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Col>
                                        </Row>

                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button onClick={addToCartHandler} className='btn-block' variant="contained" disabled={!product.countInStock > 0} startIcon={<ShoppingCartIcon />}>Add to Cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>

            }


        </div>
    );
}

export default ProductScreen;