import React, {  Fragment, useState, useEffect } from 'react';
import {getCategory, updateCategory} from '../../api/category'
import Spinner from '../shared/Spinner';
import {useParams, Link} from 'react-router-dom'

const UpdateCategory = ({
    getCategory,
    updateCategory    
})=> {
    const { id } = useParams();
   
   useEffect(()=>{
        getCategory(id);
   },[])

 
   const [values, setValues]= useState();

 
   const handleChange = (e)=>{
       const name = e.target.name;
       setValues({...values, [name] : e.target.value}) ;

   }
       
   return(
    <Fragment>
   {/*  {
    loading || category === null ? (
      <Spinner />
    ) : ( */}
        <Fragment>
        <strong>Update a Category</strong>
        <p/>
        <Link to={`/categories`}>Back</Link>

        <form 
           onSubmit={e=>{                
                        e.preventDefault();
                        /* executeUpdate({
                            values
                        })
                   */
                        window.location.reload() 
                    }}>   
        
         <div>
            <label>
                    name:<br/>
                    <input type="text" name="description" onChange={handleChange}  value={values.name} 
                    /><br/>
            </label>  
         </div>
                       

           <div>
                 <input type="submit" className="btn btn-dark my-1" value="Update Category " />  
           </div>

        </form>        
    </Fragment>
     {/*  )} */}
    </Fragment>  
   )



}

export default UpdateCategory;