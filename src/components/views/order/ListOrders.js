import React, {  Fragment, useEffect, useState } from 'react';
import {getOrders,  deleteOrder} from '../../../redux/actions/order'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory} from 'react-router-dom'
import Spinner from '../shared/Spinner';

const ListOrders = ({
    getOrders, 
    order : {orders, order, loading},
    deleteOrder
        
})=> {
   
    useEffect(()=>{
        getOrders();   
     },[getOrders, deleteOrder])

          
     return(  
                                     
        <Fragment>  {
            loading || order === null ? (
              <Spinner />
            ) : (   
                    <>
                        <strong>Orders</strong>    
                        <p/><Link to={`/orders/create`}>New Order</Link>

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Category</th>      
                                <th scope="col">Contact</th>      
                                <th scope="col">Agency</th>  
                                <th scope="col">Company</th>  
                                <th scope="col">Dealine</th>  
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders!==null && orders.map((item)=>{                          
                                        return<tr key={item._id}>
                                            <td>{item._id}</td>                                          
                                            <td>{item.category.description}</td>
                                            <td>{item.contact}</td>
                                            <td>{item.agency}</td>
                                            <td>{item.company}</td>
                                            <td>{item.deadline}</td>
                                        
                                            <td><Link to={`/orders/${item._id}/edit`}>Update</Link></td>
                                            <td><button onClick={()=>{deleteOrder(item._id); window.location.reload(); }}>Delete</button></td> 
                                        </tr> 
                                    })
                                }                                                   
                            </tbody>
                        </table> 
                    </>                                               
             )   
             }                
        </Fragment>    
        )  
    }

ListOrders.propTypes = {
    order: PropTypes.object.isRequired,
    getOrders : PropTypes.func.isRequired,
    deleteOrder:  PropTypes.func.isRequired,
    }

const mapStateToProps = (state)=>({
    order: state.order,
})

export default connect(mapStateToProps, {getOrders, deleteOrder})(ListOrders);