import React, {  Fragment, useEffect, useState } from 'react';
import { getCategories,deleteCategory } from '../../api/category';
import {Link} from 'react-router-dom';
import axios from "axios";

const baseURL = "http://localhost:5000/api/categories";

const ListCategories = ()=> {

    const [categories, setCategories] = React.useState(null);
   
    useEffect(()=>{
         axios.get(baseURL).then((response) => {
            setCategories(response.data);
            console.log("++++++++++++++++++++",categories)   
        }) 
       // setCategories(getCategories);
     },[]);

          
        return(                              
        <Fragment>                                                    
            <strong>Categories</strong>    

            <table class="table table-hover">
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
                                <td>1</td>
                                <td>{item.description}</td>
                             
                                <td><Link to={`/categories/${item._id}/edit`}>Update</Link></td>
                               {/*  <td><button onClick={()=>deleteAnswer(item._id)}>Delete</button></td> */}
                            </tr> 
                        })
                    }                                                   
                </tbody>
            </table>                     
        </Fragment>    
        )    
    }

export default ListCategories;