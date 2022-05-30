import api from '../utils/api';
 
export const getCategories= async()=>  {
    try {
        const res = await api.get('/category');       
    } catch (error) {              
    }    
}


export const getCategory= async(id)=>  {

    try {
        const res = await api.get(`/category/${id}`);
    } catch (err) {            
    }    
}

export const createCategory= async(props)=>  {

    try {
        const res = await api.post('/category', props.values);
    } catch (error) {         
    }    
}

export const deleteCategory = async(id) => async (dispatch)=>{
  
    try {
        const res = await api.delete(`/category/${id}`)
    } catch (error) {
    }
}

export const updateCategory= async(id, props)=>  {
    try {
        const res = await api.put(`/category/${id}`, props.values);
    } catch (error) {
       
    }    
}
