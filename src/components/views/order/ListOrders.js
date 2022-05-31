import React, { Fragment, useEffect, useState } from 'react';
import {getOrders,  deleteOrder, getOrder, updateOrder, showOrderModal} from '../../../redux/actions/order'
import {getCategories} from '../../../redux/actions/category'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory} from 'react-router-dom'
import Spinner from '../shared/Spinner';
import { Button, Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ListOrders = ({
    getOrders, 
    order : {orders, order, loading},
    deleteOrder,
    getOrder,  
    getCategories,
    category : {categories},
    updateOrder,
    showOrderModal,
})=> {
    const [startDate, setStartDate] = useState(new Date());
    
    const [showOrder, setShowOrder] = useState(false);
    const [showEditOrder, setShowEditOrder] = useState(false);

    const handleCloseOrder = () => setShowOrder(false);
    const handleCloseEditOrder = () => setShowEditOrder(false);

    const handleShowOrder = (id) => {
        getOrder(id)
        setShowOrder(true);        
    };

    const handleShowEditOrder = (id) => {
        getOrder(id)
        setShowOrder(false);    
        setShowEditOrder(true);         
    };

    useEffect(()=>{
        getCategories();   
     },[getCategories])

     const handleChange = (e)=>{
        const name = e.target.name;
        setValues({...values, [name] : e.target.value}) ;
    }

    const [values, setValues]= useState(order);

    const executeUpdate = ( values)=>{
        updateOrder(order._id,values )        
     }
 
           
    useEffect(()=>{
        getOrders();   
     },[getOrders, deleteOrder])

 /*    const  handleUpdate=(id)=>{
            setShowOrder(false);     
            window.location=`/orders/${id}/edit`;
     } */
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
                               Open New Order
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
                                            return<tr onClick={()=>{handleShowOrder(item._id)}} key={item._id}>
                                                        <td>{item._id}</td>                                          
                                                        <td>{item.category.description}</td>
                                                        <td>{item.contactName}</td>
                                                        <td>{item.contactPhone}</td>
                                                        <td>{item.agency}</td>
                                                        <td>{item.company}</td>
                                                        <td>{item.deadline}</td>                                            
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
                        <Modal show={showOrder} onHide={handleCloseOrder}>
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
                            <Button variant="warning" onClick={handleShowEditOrder}>
                                Update
                            </Button>
                            <Button variant="danger" onClick={()=>{deleteOrder(order._id); window.location.reload(); }}>
                                Delete
                            </Button>
                            <Button variant="secondary" onClick={handleCloseOrder}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>   
                    </Fragment>
                    <Fragment>                     
                        <Modal show={showEditOrder} onHide={handleCloseEditOrder}>
                            <Modal.Header closeButton>
                            <Modal.Title>View Order</Modal.Title>
                            </Modal.Header>
                              <Modal.Body>   
                                <form 
                                onSubmit={e=>{                
                                                e.preventDefault();
                                                executeUpdate({
                                                    values
                                                })                                               
                                                window.location.reload() 
                                            }}>   
                                
                                <div>
                                                <label>
                                                        CATEGORY:<br/>                               
                                                        <select name="category" onChange={handleChange}>
                                                            <option >{values.category}</option>
                                                            {
                                                                categories.map((item)=>{
                                                                    return <option value={item._id} key={item._id}> {item.description} </option>
                                                                })
                                                            }                                
                                                        </select>
                                                </label> 
                                            
                                                <label>
                                                        CONTACT NAME:<br/>
                                                        <input type="text" name="contactName" onChange={handleChange} value={values.contactName} />
                                                </label> 

                                                <label>
                                                        CONTACT PHONE:<br/>
                                                        <input type="text" name="contactPhone" onChange={handleChange} value={values.contactPhone} />
                                                </label> 

                                                <label>
                                                        AGENCY:<br/>
                                                        <input type="text" name="agency" onChange={handleChange} value={values.agency} />
                                                </label> 
                                                <label>
                                                        COMPANY:<br/>
                                                        <input type="text" name="company" onChange={handleChange} value={values.company} />
                                                </label> 
                                                <label>
                                                        DEADLINE:<br/>
                                                        <input  type="text" name="deadline" onChange={handleChange} value={values.deadline} />
                                                </label> 
                                                <label>
                                                       DEADLINE:<br/>
                                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                                </label>
                                        </div>                              
                                </form>        
                                </Modal.Body>
                                                    <Modal.Footer>                                                   
                                                    <Button variant="primary" onClick={handleCloseEditOrder}>
                                                        Save
                                                    </Button>
                                                    <Button variant="secondary" onClick={handleCloseEditOrder}>
                                                        Close
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
    getOrder:  PropTypes.func.isRequired,  
    getCategories: PropTypes.func.isRequired,  
    updateOrder: PropTypes.func.isRequired,  
    showOrderModal:  PropTypes.func.isRequired,
    }

const mapStateToProps = (state)=>({
    order: state.order,
    category: state.category
})

export default connect(mapStateToProps, {getOrders,    getOrder,   deleteOrder, getCategories, updateOrder, showOrderModal})(ListOrders);