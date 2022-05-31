import {
    GET_ORDERS,
    GET_ORDER,
    CREATE_ORDER,
    DELETE_ORDER,
    SHOW_ORDER_MODAL,
    CLOSE_ORDER_MODAL,
    ORDERS_ERROR,
    ORDER_ERROR
} from '../actions/types'

const initialState = {
    loading : true,
    show:false,
    orders : [],
    order: '' ,
    error: {}
}


function orderReducer(state=initialState, action) {

   const { type, payload } = action;

        switch(type){
            case GET_ORDERS :
                return {
                   ...state,
                    orders : payload,
                    loading : false
                }
            case GET_ORDER :
                    return {
                       ...state,
                        order : payload,
                        loading : false
                    }
            case CREATE_ORDER :
                return{
                    ...state,
                    order: payload,
                    loading:false
                }
            case DELETE_ORDER :
                return{
                    ...state,
                    orders: state.orders.filter((order)=>order._id !== payload),
                    loading:false
                }
            case SHOW_ORDER_MODAL :{
                return{
                    ...state,
                    order: payload,
                    loading:false,
                    show: true
                }
            }
            case CLOSE_ORDER_MODAL :{
                return{
                    ...state,
                    order: payload,
                    loading:false,
                    show: false
                }
            }
            case ORDERS_ERROR:
                    return {
                      ...state,
                      error: payload,
                      loading: false
                    };
            case ORDER_ERROR:
                return {
                    ...state,
                    error: payload,
                    loading: false
                  };
                       
            default:
                    return state;
        }    
}



export default orderReducer