import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CreateCategory from '../views/category/CreateCategory';
import UpdateCategory from '../views/category/UpdateCategory';
import ListCategorys from '../views/category/ListCategories';

 
const MyRoutes = (props) => {
  return (
   
     
            <div>          
                <Switch>      
                       <Route exact path="/category" component={ListCategorys} />           
                       <Route exact path="/category/create" component={CreateCategory} /> 
                       <Route exact path="/category/:id/edit" component={UpdateCategory} />      
                </Switch>
            </div>
     

  );
};

export default MyRoutes;
