import { combineReducers } from 'redux';
import category from './category'
import order from './order'
import alert from './alert'

export default combineReducers ({
    category,
    order,
    alert
})

