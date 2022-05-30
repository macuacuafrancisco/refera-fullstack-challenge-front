import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CreateCategory from '../views/category/CreateCategory';
import UpdateCategory from '../views/category/UpdateCategory';
import ListCategories from '../views/category/ListCategories';

import CreateOrder from '../views/order/CreateOrder';
import UpdateOrder from '../views/order/UpdateOrder';
import ListOrders from '../views/order/ListOrders';
 
const MyRoutes = (props) => {
  return (
   
     
            <div>          
                <Switch>      
                       <Route exact path="/categories" component={ListCategories} />           
                       <Route exact path="/categories/create" component={CreateCategory} /> 
                       <Route exact path="/categories/:id/edit" component={UpdateCategory} />   

                       <Route exact path="/orders" component={ListOrders} />           
                       <Route exact path="/orders/create" component={CreateOrder} /> 
                       <Route exact path="/orders/:id/edit" component={UpdateOrder} />      
                </Switch>
            </div>
     

  );
};

export default MyRoutes;
