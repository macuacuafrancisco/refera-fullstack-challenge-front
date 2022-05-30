import React, {  Fragment, useState } from 'react';
import {createCategory} from '../../../redux/actions/category'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'


const CreateCategory = ({
    createCategory,    
})=> {

   const [values, setValues]= useState();
   const history=useHistory()

   const handleChange = (e)=>{
       const name = e.target.name;
       setValues({...values, [name] : e.target.value}) ;
   }

       
        return(
            <Fragment>
                <strong>Create a Category</strong>
                <p/>
                <p/>
                <Link to={`/categories`}>Back</Link>

                <form
                   onSubmit={e=>{                
                                e.preventDefault();
                                createCategory({
                                    values
                                })
                                setValues('');
                                history.push('/categories');
                                window.location.reload() 
                            }}>   
                 <div>
                        <label>
                                DESCRIPTION:<br/>
                                <input type="text" name="description" onChange={handleChange} />
                        </label> 
                   </div> 

                                              
                

                   <div>
                           <input type="submit" className="btn btn-dark my-1" value="Submit Category" />  
                   </div>

                </form>        
            </Fragment>

          
        )
    }

CreateCategory.propTypes = {
    createCategory: PropTypes.func.isRequired,   
}

const mapStateToProps = (state)=>({
   
})

export default connect(null, {createCategory})(CreateCategory);