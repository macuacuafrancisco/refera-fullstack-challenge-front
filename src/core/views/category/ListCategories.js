import React, {  Fragment, useEffect, useState } from 'react';
import { getCategories } from '../../api/category';
import { deleteCategory } from '../../api/category';

const ListCategorys = ()=> {
   
    useEffect(()=>{
        getCategories();   
     },[getCategories, deleteCategory])

          
        return(                              
        <Fragment>                                                    
            <strong>Categories</strong>                         
        </Fragment>    
        )    
    }

export default ListCategorys;