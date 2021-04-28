import React from 'react';
import {useDispatch} from "react-redux";
import {addToCart} from "../actions/cartActions";

export default  function CartScreen({match, location, history}) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    React.useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    return (
        <div>
            Cart
        </div>
    );
}
