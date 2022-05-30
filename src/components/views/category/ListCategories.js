import React, {  Fragment, useEffect, useState } from 'react';
import {getCategories,  deleteCategory} from '../../../redux/actions/category'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory} from 'react-router-dom'
import Spinner from '../shared/Spinner';

const ListCategories = ({
    getCategories, 
    category : {categories, category, loading},
    deleteCategory
        
})=> {
   
    useEffect(()=>{
        getCategories();   
     },[getCategories, deleteCategory])

          
     return(  
                                     
        <Fragment>  {
            loading || category === null ? (
              <Spinner />
            ) : (   
                    <>
                        <strong>Categories</strong>    
                        <p/><Link to={`/categories/create`}>New Category</Link>

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">DESCRIPTION</th>      
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories!==null && categories.map((item)=>{                          
                                        return<tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.description}</td>
                                        
                                            <td><Link to={`/categories/${item._id}/edit`}>Update</Link></td>
                                            <td><button onClick={()=>{deleteCategory(item._id); window.location.reload(); }}>Delete</button></td> 
                                        </tr> 
                                    })
                                }                                                   
                            </tbody>
                        </table> 
                    </>                                               
             )   
             }                
        </Fragment>    
        )  
    }

ListCategories.propTypes = {
    category: PropTypes.object.isRequired,
    getCategories : PropTypes.func.isRequired,
    deleteCategory:  PropTypes.func.isRequired,
    }

const mapStateToProps = (state)=>({
    category: state.category,
})

export default connect(mapStateToProps, {getCategories, deleteCategory})(ListCategories);