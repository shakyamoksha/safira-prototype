import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions/cartActions";
import {Col, Image, ListGroup, Row} from "react-bootstrap";
import Toastr from "../components/toastr";
import Message from "../components/Message";
import {Link} from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import {InputLabel} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default  function CartScreen({match, location, history}) {
    const classes = useStyles();
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    React.useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>

                {cartItems.length === 0 ?
                    (<div>
                        <Message variant={'info'} children={`Your cart is empty.`}/>
                        <Toastr severity={'info'} children={'Your cart is empty.'}/>
                    </div>) :
                    (<ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        {item.price}
                                    </Col>
                                    <Col md={3}>
                                        <FormControl fullWidth={true} className={classes.formControl}>
                                            <InputLabel id="quantity-select-label">Quantity</InputLabel>
                                            <Select labelId="quantity-select-label" id="quantity-select" value={item.qty} onChange={e => dispatch(addToCart(item.product, e.target.value ))}>
                                                {[...Array(item.countInStock).keys()].map(x =>(
                                                    <MenuItem key={x+1} value={x+1}>{x+1}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>)
                }
            </Col>

            <Col md={4}>

            </Col>
        </Row>
    );
}
