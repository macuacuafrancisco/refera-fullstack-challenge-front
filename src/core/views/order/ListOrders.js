import React, {  Fragment, useEffect, useState } from 'react';
import { getOrders } from '../../api/order';
import { deleteOrder } from '../../api/order';

const ListOrders = ()=> {
   
    useEffect(()=>{
        getOrders();   
     },[getOrders, deleteOrder])

          
        return(                              
        <Fragment>                                                    
            <strong>Orders</strong>                         
        </Fragment>    
        )    
    }

export default ListOrders;