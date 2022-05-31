import React, { Fragment, useEffect, useState } from 'react';
import {getOrders,  deleteOrder, getOrder, updateOrder,createOrder} from '../../../redux/actions/order'
import {getCategories} from '../../../redux/actions/category'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../shared/Spinner';
import { Button, Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link, useHistory} from 'react-router-dom'

const ListOrders = ({
    getOrders, 
    order : {orders, order, loading, },
    deleteOrder,
    getOrder,  
    getCategories,
    category : {categories},
    updateOrder,
    createOrder,
})=> {
    const history=useHistory()

    const [showOrder, setShowOrder] = useState(false);
    const [showEditOrder, setShowEditOrder] = useState(false);

    const handleCloseOrder = () => setShowOrder(false);
    const handleCloseEditOrder = () => {setShowEditOrder(false);
                setIsNew(false)
    }

    const [isNew,setIsNew] = useState(false)

    const handlePersisteOrder =() => {
        executeUpdate({
            values
        })                                           
       }

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
        setValues(order);   
        setStartDate(new Date(order.deadline))
     },[getOrder, order])

    useEffect(()=>{
        getCategories();   
     },[getCategories])
  
     const handleChange = (e)=>{
        const name = e.target.name;
        setValues({...values, [name] : e.target.value}) ;
    }

    const [values, setValues]= useState(order);

    const [startDate, setStartDate] = useState(new Date());
    

    const executeUpdate = ( values)=>{
       
        if(isNew){  
            console.log('is new')        
            createOrder(values ) 
            setValues(''); 
        }else{
            console.log('is not new')        
            updateOrder(order._id,values )
            setValues(''); 
        }       
        // history.push('/orders');
        //  window.location.reload() 
        // setIsNew(false)
     }
 
           
    useEffect(()=>{
        getOrders();   
     },[getOrders, deleteOrder])


    const handleNewOrder =()=>{
         setIsNew(true)
         setValues('')   
         setShowEditOrder(true);
     }

     const handleDataChange = (date)=>{        
        setStartDate(date)
        values.deadline=startDate;
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
                              {
                                loading || order === null ? (
                                <>LOADING...</>
                                ) : ( <>
                                                 <p/> <div>ID:  {order._id}      </div>  <br/>                                  
                                                 <p/> <div> CATEGORY:    {order.category} </div>  <br/>    
                                                 <p/> <div>  CONTACT NAME:  {order.contactName} </div> <br/>     
                                                 <p/> <div>  CONTACT PHONE:    {order.contactPhone} </div> <br/>     
                                                 <p/> <div>  AGENCY:  {order.agency} </div> <br/>     
                                                  <p/> <div>  COMPANY:  {order.company} </div> <br/>     
                                                  <p/>  <div>  DEADLINE:  {order.deadline}   </div>   <br/>   
                                </>                                             
                                 )}                                
                              </Modal.Body>
                            
                            <Modal.Footer>                        
                            <Button variant="warning" onClick={()=>{handleShowEditOrder(order._id)}}>
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
                            <Modal.Title>Save Order</Modal.Title>
                            </Modal.Header>                            
                              <Modal.Body>   
                              {
                            loading || order === null ? (
                            <>LOADING...</>
                            ) : (                         
                                <div>
                                               <div> <label>
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
                                                </div>
                                            
                                                <div> 
                                                    <label>
                                                        CONTACT NAME:<br/>
                                                        <input type="text" name="contactName" onChange={handleChange} value={values.contactName} />
                                                </label> 
                                                </div>

                                                <div>
                                                    <label>
                                                        CONTACT PHONE:<br/>
                                                        <input type="text" name="contactPhone" onChange={handleChange} value={values.contactPhone} />
                                                </label>
                                                 </div>

                                                <div> 
                                                    <label>
                                                        AGENCY:<br/>
                                                        <input type="text" name="agency" onChange={handleChange} value={values.agency} />
                                                </label>
                                                </div> 
                                                <div> 
                                                    <label>
                                                        COMPANY:<br/>
                                                        <input type="text" name="company" onChange={handleChange} value={values.company} />
                                                </label> 
                                                </div>
                                               
                                                <div>   <label>
                                                       DEADLINE(mm/dd/yyyy):<br/>
                                                       {isNew && <input type="text" name="deadline" onChange={handleChange} value={values.deadline}  />}
                                                       {!isNew && <DatePicker selected={startDate} onChange={(date) => handleDataChange(date)} />}
                                                </label>
                                                 </div>
                                        </div>                              
                               )} 
                                </Modal.Body>   
                                                    <Modal.Footer>                                                   
                                                    <Button variant="primary" onClick={handlePersisteOrder}>
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
    createOrder: PropTypes.func.isRequired 
    }

const mapStateToProps = (state)=>({
    order: state.order,
    category: state.category
})

export default connect(mapStateToProps, {getOrders,    getOrder,   deleteOrder, getCategories, updateOrder, createOrder})(ListOrders);