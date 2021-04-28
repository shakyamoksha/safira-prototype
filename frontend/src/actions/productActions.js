import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FALSE} from '../constants/productConstant'
import axios from "axios";

export const listProducts = () => async (dispatch) => {

    try{
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('/api/products/');

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        // console.log(error)
        dispatch({
            type: PRODUCT_LIST_FALSE,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}