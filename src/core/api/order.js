import api from '../utils/api';
 
export const getOrders=async ()=>  {
    try {
        const res = await api.get('/order');       
    } catch (error) {              
    }    
}


export const getOrder=async (id)=> {

    try {
        const res = await api.get(`/order/${id}`);
    } catch (err) {            
    }    
}

export const createOrder= async(props)=>  {

    try {
        const res = await api.post('/order', props.values);
    } catch (error) {         
    }    
}

export const deleteOrder = async(id) => async (dispatch)=>{
  
    try {
        const res = await api.delete(`/order/${id}`)
    } catch (error) {
    }
}

export const updateOrder= async(id, props)=>  {
    try {
        const res = await api.put(`/order/${id}`, props.values);
    } catch (error) {
       
    }    
}
