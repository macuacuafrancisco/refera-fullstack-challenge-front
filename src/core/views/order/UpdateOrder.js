import React, {  Fragment, useState, useEffect } from 'react';
import {getOrder, updateOrder} from '../../api/order'
import Spinner from '../shared/Spinner';
import {useParams, Link} from 'react-router-dom'

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
        <Link to={`/order`}>Back</Link>

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
                    name:<br/>
                    <input type="text" name="name" onChange={handleChange}  value={values.name} 
                    /><br/>
            </label>  
         </div>
         
           <div>
            <label>
                    email:<br/>
                    <input type="text" name="email"  onChange={handleChange}  value={values.email} 
                    /><br/>
            </label> 
           </div>

           <div>
                <label>
                        phone:<br/>
                        <input type="text" name="phone"  onChange={handleChange}  value={values.phone} 
                        /><br/>
                </label> 
           </div>

           <div>
                <label>
                        address:<br/>
                        <input type="text" name="address"  onChange={handleChange}  value={values.address} 
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

export default UpdateOrder;