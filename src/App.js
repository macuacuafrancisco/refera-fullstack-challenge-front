import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListCategorys from './core/views/category/ListCategories';
import MyRoutes from './core/routing/Routes';


const App =()=> {
  return (<>
  <Router>
       <Switch>
         <Route exact path="/" component={ListCategorys}/>
         <Route component={MyRoutes} />
       </Switch>
    </Router></>           
  );
}

export default App;
