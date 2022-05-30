import React, {  Fragment, useState, useEffect } from 'react';
import {getCategory, updateCategory} from '../../api/category'
import Spinner from '../shared/Spinner';
import {useParams, Link} from 'react-router-dom'

const UpdateCategory = ({
    getCategory,
    updateCategory,   
    category :{category, loading},
    
})=> {
    const { id } = useParams();
   
   useEffect(()=>{
        getCategory(id);
   },[])

   useEffect(()=>{
    setValues(category)   
},[category])

   const [values, setValues]= useState(category);

   const executeUpdate = ( values)=>{
       updateCategory(category._id,values )        
    }

   const handleChange = (e)=>{
       const name = e.target.name;
       setValues({...values, [name] : e.target.value}) ;

   }
       
   return(
    <Fragment>
    {
    loading || category === null ? (
      <Spinner />
    ) : (
        <Fragment>
        <strong>Update a Category</strong>
        <p/>
        <Link to={`/category`}>Back</Link>

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
                 <input type="submit" className="btn btn-dark my-1" value="Update Category " />  
           </div>

        </form>        
    </Fragment>
      )}
    </Fragment>  
   )



}

export default UpdateCategory;