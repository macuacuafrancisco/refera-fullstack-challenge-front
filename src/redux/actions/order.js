import api from '../../utils/api';
import {GET_ORDERS, GET_ORDER, CREATE_ORDER, UPDATE_ORDER, DELETE_ORDER,ORDERS_ERROR, ORDER_ERROR} from './types'

 
export const getOrders= ()=> async (dispatch) => {
    try {
        const res = await api.get('/orders');

        dispatch({
            type : GET_ORDERS,
            payload : res.data  
        })
    } catch (error) {
        dispatch({
            type: ORDERS_ERROR,
            payload : {status : error.response.status}
        })        
    }    
}



export const getOrder= (id)=> async (dispatch) => {

    try {
        const res = await api.get(`/orders/${id}`);

        dispatch({
            type : GET_ORDER,    
            payload : res.data  
        });
    } catch (err) {
        dispatch({
            type: ORDER_ERROR,
            payload : {msg : err.response.statusText, status: err.response.status }
        })        
    }    
}

export const createOrder= (props)=> async (dispatch) => {
   
    try {
        const res = await api.post('/orders', props.values);

        dispatch({
            type : CREATE_ORDER,
            payload : res.data  
        })
    } catch (error) {
        dispatch({
            type: ORDERS_ERROR,
            payload : {status : error.response.status}
        })        
    }    
}

export const deleteOrder = (id) => async (dispatch)=>{
  
    try {
        const res = await api.delete(`/orders/${id}`)

        dispatch(
            {
                type: DELETE_ORDER,
                payload: res.data
            }
        )
    } catch (error) {
        dispatch({
            type:ORDERS_ERROR,
            payload: {status: error.response.status}
        })
    }
}

export const updateOrder= (id, props)=> async (dispatch) => {

    try {
        const res = await api.put(`/orders/${id}`, props.values);

        dispatch({
            type : UPDATE_ORDER,
            payload : res.data  
        })
    } catch (error) {
        dispatch({
            type: ORDERS_ERROR,
            payload : {status : error.response.status}
        })        
    }    
}



