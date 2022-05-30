import React, {  Fragment, useState, useEffect } from 'react';
import {getCategory, updateCategory} from '../../../redux/actions/category'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../shared/Spinner';
import {useParams, Link, useHistory} from 'react-router-dom'

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
   const history= useHistory()

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
        <Link to={`/categories`}>Back</Link>

        <form 
           onSubmit={e=>{                
                        e.preventDefault();
                        executeUpdate({
                            values
                        })
                        history.push('/categories');
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
                 <input type="submit" className="btn btn-dark my-1" value="Update Category " />  
           </div>

        </form>        
    </Fragment>
      )}
    </Fragment>  
   )



}

UpdateCategory.propTypes = {
    getCategory: PropTypes.func.isRequired,   
    updateCategory: PropTypes.func.isRequired,   
    category: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>({
   category: state.category
})

export default connect(mapStateToProps, {getCategory,updateCategory})(UpdateCategory);