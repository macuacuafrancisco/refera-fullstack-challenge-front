import React, {  Fragment, useState, useEffect } from 'react';
import {getCategories} from '../../../redux/actions/category'
import {getOrder, updateOrder} from '../../../redux/actions/order'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../shared/Spinner';
import {useParams, Link, useHistory} from 'react-router-dom'

const UpdateOrder = ({
    getOrder,
    updateOrder,   
    order :{order, loading},
    getCategories,
    category : {categories}
})=> {
    const { id } = useParams();
   
    useEffect(()=>{
        getCategories();   
     },[getCategories])

   useEffect(()=>{
        getOrder(id);
   },[])

   useEffect(()=>{
    setValues(order)   
},[order])

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
    {
    loading || order === null ? (
      <Spinner />
    ) : (
        <Fragment>
        <strong>Update a Order</strong>
        <p/>
        <Link to={`/orders`}>Back</Link>

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
                   </div> 



           <div>
                 <input type="submit" className="btn btn-dark my-1" value="Update Order " />  
           </div>

        </form>        
    </Fragment>
      )}
    </Fragment>  
   )



}

UpdateOrder.propTypes = {
    getCategories: PropTypes.func.isRequired,   
     getOrder: PropTypes.func.isRequired,  
    updateOrder: PropTypes.func.isRequired,   
    order: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
   order: state.order,
   category: state.category
})

export default connect(mapStateToProps, {getOrder,updateOrder, getCategories})(UpdateOrder);