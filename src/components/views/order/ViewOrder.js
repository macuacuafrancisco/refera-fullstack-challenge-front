import React, {  Fragment, useState, useEffect, Button } from 'react';
import {getCategories} from '../../../redux/actions/category'
import {getOrder, updateOrder, closeOrderModal} from '../../../redux/actions/order'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../shared/Spinner';
import {useParams, Link, useHistory} from 'react-router-dom'
import {Modal} from 'react-bootstrap'

const UpdateOrder = ({
    getOrder,
    updateOrder,   
    order :{order, loading},
    getCategories,
    category : {categories},
    closeOrderModal
})=> {
    const { id } = useParams();
    
   useEffect(()=>{
        getOrder(id);
   },[])

 
   const [values, setValues]= useState(order);
   const history= useHistory()

   const executeUpdate = ( values)=>{
       updateOrder(order._id,values )        
    }

   const handleChange = (e)=>{
       const name = e.target.name;
       setValues({...values, [name] : e.target.value}) ;

   }
       
   return(
    <Fragment>
         <form 
           onSubmit={e=>{                
                        e.preventDefault();
                        executeUpdate({
                            values
                        })
                        history.push('/orders');
                        window.location.reload() 
                    }}>   
        
                    <div>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                                <input type="text" name="deadline" onChange={handleChange} value={values.deadline} />
                        </label> 
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={closeOrderModal}>
                            Close
                        </Button>                       
                        </Modal.Footer>
                   </Modal.Dialog>
                   </div> 



           <div>
                 <input type="submit" className="btn btn-dark my-1" value="Update Order " />  
           </div>

        </form>     
    </Fragment>  
   )



}

UpdateOrder.propTypes = {
    getCategories: PropTypes.func.isRequired,   
    getOrder: PropTypes.func.isRequired,  
    updateOrder: PropTypes.func.isRequired, 
    closeOrderModal: PropTypes.func.isRequired, 
    order: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
   order: state.order,
   category: state.category
})

export default connect(mapStateToProps, {getOrder,updateOrder, getCategories, closeOrderModal})(UpdateOrder);