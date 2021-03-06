import {
    GET_CATEGORIES,
    GET_CATEGORY,
    CREATE_CATEGORY,
    DELETE_CATEGORY,
    CATEGORIES_ERROR,
    CATEGORY_ERROR
} from '../actions/types'

const initialState = {
    loading : true,
    categories : [],
    category: '' ,
    error: {}
}


function categoryReducer(state=initialState, action) {

   const { type, payload } = action;

        switch(type){
            case GET_CATEGORIES :
                return {
                   ...state,
                    categories : payload,
                    loading : false
                }
            case GET_CATEGORY :
                    return {
                       ...state,
                        category : payload,
                        loading : false
                    }
            case CREATE_CATEGORY :
                return{
                    ...state,
                    category: payload,
                    loading:false
                }
            case DELETE_CATEGORY :
                return{
                    ...state,
                    categories: state.categories.filter((category)=>category._id !== payload),
                    loading:false
                }
            case CATEGORIES_ERROR:
                    return {
                      ...state,
                      error: payload,
                      loading: false
                    };
            case CATEGORY_ERROR:
                return {
                    ...state,
                    error: payload,
                    loading: false
                  };
                       
            default:
                    return state;
        }    
}



export default categoryReducer