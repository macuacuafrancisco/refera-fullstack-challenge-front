import api from '../utils/api';
import axios from "axios";
 
export const getCategories= async()=>  {
    try {
        const baseURL = "http://localhost:5000/api/categories";
    
       const result = await  axios.get(baseURL);

       console.log(result.data);
       
    } catch (error) {              
    }    
}


export const getCategory= async(id)=>  {

    try {
        const res = await api.get(`/categories/${id}`);
    } catch (err) {            
    }    
}

export const createCategory= async(props)=>  {

    try {
        const res = await api.post('/categories', props.values);
    } catch (error) {         
    }    
}

export const deleteCategory = async(id) => async (dispatch)=>{
  
    try {
        const res = await api.delete(`/categories/${id}`)
    } catch (error) {
    }
}

export const updateCategory= async(id, props)=>  {
    try {
        const res = await api.put(`/categories/${id}`, props.values);
    } catch (error) {
       
    }    
}
