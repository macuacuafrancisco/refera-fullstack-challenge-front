import React, {  Fragment, useState } from 'react';
import {createCategory} from '../../api/category'
import {Link} from 'react-router-dom'


const CreateCategory = ({
    createCategory,    
})=> {

   const [values, setValues]= useState();


   const handleChange = (e)=>{
       const name = e.target.name;
       setValues({...values, [name] : e.target.value}) ;
   }

       
        return(
            <Fragment>
                <strong>Create a Category</strong>
                <p/>
                <p/>
                <Link to={`/category`}>Back</Link>

                <form
                   onSubmit={e=>{                
                                e.preventDefault();
                                createCategory({
                                    values
                                })
                                setValues('');
                            
                                window.location.reload() 
                            }}>   
                 <div>
                        <label>
                                name:<br/>
                                <input type="text" name="name" onChange={handleChange} />
                        </label> 
                   </div> 

                   <div>
                        <label>
                                email:<br/>
                                <input type="text" name="email"  onChange={handleChange}/>
                        </label> 
                   </div>

                   <div>
                        <label>
                                phone:<br/>
                                <input type="text" name="phone"  onChange={handleChange}/>
                        </label> 
                   </div>

                   <div>
                        <label>
                                address:<br/>
                                <input type="text" name="address"  onChange={handleChange}/>
                        </label> 
                   </div> 
                

                   <div>
                           <input type="submit" className="btn btn-dark my-1" value="Submit Category" />  
                   </div>

                </form>        
            </Fragment>

          
        )
    }


export default CreateCategory;