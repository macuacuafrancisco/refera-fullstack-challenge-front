import React, { Fragment, useEffect, useState } from 'react';
import {getOrders,  deleteOrder, showOrderModal} from '../../../redux/actions/order'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory} from 'react-router-dom'
import Spinner from '../shared/Spinner';
import ViewOrder from './ViewOrder';
import { Button, Modal } from 'react-bootstrap';

const ListOrders = ({
    getOrders, 
    order : {orders, order, loading},
    deleteOrder,
    showOrderModal  
})=> {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (id) => setShow(true);

    useEffect(()=>{
        getOrders();   
     },[getOrders, deleteOrder])

    const  handleUpdate=(id)=>{
            window.location=`/orders/${id}/edit`;
     }
    const handleNewOrder =()=>{
        window.location=`/orders/create`;
     }
           
     return( 
            <Fragment> 
                                        
            <Fragment>  {
                loading || order === null ? (
                <Spinner />
                ) : (   
                        <>
                           <Button variant="primary" onClick={()=>handleNewOrder()}>
                               New Order
                           </Button>
                                                 
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Category</th>      
                                    <th scope="col">Contact Name</th>    
                                    <th scope="col">Contact Phone</th>     
                                    <th scope="col">Agency</th>  
                                    <th scope="col">Company</th>  
                                    <th scope="col">Dealine</th>  
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders!==null && orders.map((item)=>{                          
                                            return<tr onClick={()=>{handleShow(item._id)}} key={item._id}>
                                                        <td>{item._id}</td>                                          
                                                        <td>{item.category.description}</td>
                                                        <td>{item.contactName}</td>
                                                        <td>{item.contactPhone}</td>
                                                        <td>{item.agency}</td>
                                                        <td>{item.company}</td>
                                                        <td>{item.deadline}</td>                                            
                                                        <td><Button variant="warning" onClick={()=>{handleUpdate(item._id)}}>Update</Button></td>
                                                        <td><Button variant="danger" onClick={()=>{deleteOrder(item._id); window.location.reload(); }}>Delete</Button></td> 
                                            </tr> 
                                        })
                                    }                                                   
                                </tbody>
                            </table> 
                        </>                                               
                )   
                }             
               </Fragment>
               <Fragment>                     
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>View Order</Modal.Title>
                            </Modal.Header>
                              <Modal.Body>                             
                                                        {order._id}                                         
                                                        {order.category}
                                                      {order.contactName}
                                                        {order.contactPhone}
                                                       {order.agency}
                                                       {order.company}
                                                       {order.deadline}                                 
                              </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>   
                    </Fragment>
        </Fragment>
         )  
    }

ListOrders.propTypes = {
    order: PropTypes.object.isRequired,
    getOrders : PropTypes.func.isRequired,
    deleteOrder:  PropTypes.func.isRequired,
    showOrderModal:  PropTypes.func.isRequired,
    }

const mapStateToProps = (state)=>({
    order: state.order,
})

export default connect(mapStateToProps, {getOrders, deleteOrder, showOrderModal})(ListOrders);