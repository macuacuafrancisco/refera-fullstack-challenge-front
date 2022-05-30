import api from '../../utils/api';
import {GET_CATEGORIES, GET_CATEGORY, CREATE_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, CATEGORIES_ERROR, CATEGORY_ERROR} from './types'

 
export const getCategories= ()=> async (dispatch) => {
    try {
        const res = await api.get('/categories');

        dispatch({
            type : GET_CATEGORIES,
            payload : res.data  
        })
    } catch (error) {
        dispatch({
            type: CATEGORIES_ERROR,
            payload : {status : error.response.status}
        })        
    }    
}



export const getCategory= (id)=> async (dispatch) => {

    try {
        const res = await api.get(`/categories/${id}`);

        dispatch({
            type : GET_CATEGORY,    
            payload : res.data  
        });
    } catch (err) {
        dispatch({
            type: CATEGORY_ERROR,
            payload : {msg : err.response.statusText, status: err.response.status }
        })        
    }    
}

export const createCategory= (props)=> async (dispatch) => {

    try {
        const res = await api.post('/categories', props.values);

        dispatch({
            type : CREATE_CATEGORY,
            payload : res.data  
        })
    } catch (error) {
        dispatch({
            type: CATEGORIES_ERROR,
            payload : {status : error.response.status}
        })        
    }    
}

export const deleteCategory = (id) => async (dispatch)=>{
  
    try {
        const res = await api.delete(`/categories/${id}`)

        dispatch(
            {
                type: DELETE_CATEGORY,
                payload: res.data
            }
        )
    } catch (error) {
        dispatch({
            type:CATEGORIES_ERROR,
            payload: {status: error.response.status}
        })
    }
}

export const updateCategory= (id, props)=> async (dispatch) => {

    try {
        const res = await api.put(`/categories/${id}`, props.values);

        dispatch({
            type : UPDATE_CATEGORY,
            payload : res.data  
        })
    } catch (error) {
        dispatch({
            type: CATEGORIES_ERROR,
            payload : {status : error.response.status}
        })        
    }    
}
