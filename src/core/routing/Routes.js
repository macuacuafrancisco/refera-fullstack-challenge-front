import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CreateCategory from '../views/category/CreateCategory';
import UpdateCategory from '../views/category/UpdateCategory';
import ListCategorys from '../views/category/ListCategories';

 
const MyRoutes = (props) => {
  return (
    <section className="container">
      <div className="container-layout">
            <div>          
                <Routes>      
                       <Route exact path="/category" component={ListCategorys} />           
                       <Route exact path="/category/create" component={CreateCategory} /> 
                       <Route exact path="/category/:id/edit" component={UpdateCategory} />      
                </Routes>
            </div>
      </div>
    </section>
  );
};

export default MyRoutes;
