import React, {  Fragment, useState , useEffect} from 'react';
import {getCategories,  deleteCategory} from '../../../redux/actions/category'
import {createOrder} from '../../../redux/actions/order'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'


const CreateOrder = ({
    getCategories,
    createOrder,   
    category : {categories, category, loading}, 
})=> {

    useEffect(()=>{
        getCategories();   
     },[getCategories, deleteCategory])


   const [values, setValues]= useState();
   const history=useHistory()

   const handleChange = (e)=>{
       const name = e.target.name;
       setValues({...values, [name] : e.target.value}) ;
   }
       
        return(
            <Fragment>
                <strong>Create a Order</strong>
                <p/>
                <p/>
                <Link to={`/orders`}>Back</Link>

                <form
                   onSubmit={e=>{                
                                e.preventDefault();
                                createOrder({
                                    values
                                })
                                setValues('');
                                history.push('/orders');
                                window.location.reload() 
                            }}>   
                 <div>
                        <label>
                                CATEGORY:<br/>                               
                                <select name="category" onChange={handleChange}>
                                    <option >Please select</option>
                                    {
                                        categories.map((item)=>{
                                            return <option value={item._id} key={item._id}> {item.description} </option>
                                        })
                                    }                                
                                </select>
                        </label> 
                        <label>
                                DESCRIPTION:<br/>
                                <input type="text" name="description" onChange={handleChange} />
                        </label> 
                        <label>
                                CONTACT:<br/>
                                <input type="text" name="contact" onChange={handleChange} />
                        </label> 
                        <label>
                                AGENCY:<br/>
                                <input type="text" name="agency" onChange={handleChange} />
                        </label> 
                        <label>
                                COMPANY:<br/>
                                <input type="text" name="company" onChange={handleChange} />
                        </label> 
                        <label>
                                DEADLINE:<br/>
                                <input type="text" name="deadline" onChange={handleChange} />
                        </label> 
                   </div> 


                   <div>
                           <input type="submit" className="btn btn-dark my-1" value="Submit Order" />  
                   </div>

                </form>        
            </Fragment>

          
        )
    }

CreateOrder.propTypes = {
    createOrder: PropTypes.func.isRequired,   
    getCategories : PropTypes.func.isRequired,
}

const mapStateToProps = (state)=>({
    category: state.category,
})

export default connect(mapStateToProps, {createOrder, getCategories})(CreateOrder);