import React, {  Fragment, useState, useEffect } from 'react';
import {getOrder, updateOrder} from '../../../redux/actions/order'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../shared/Spinner';
import {useParams, Link, useHistory} from 'react-router-dom'

const UpdateOrder = ({
    getOrder,
    updateOrder,   
    order :{order, loading},
    
})=> {
    const { id } = useParams();
   
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
                    DESCRIPTION:<br/>
                    <input type="text" name="description" onChange={handleChange}  value={values.description} 
                    /><br/>
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
    getOrder: PropTypes.func.isRequired,   
    updateOrder: PropTypes.func.isRequired,   
    order: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
   order: state.order
})

export default connect(mapStateToProps, {getOrder,updateOrder})(UpdateOrder);