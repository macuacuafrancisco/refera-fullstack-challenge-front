import { Fragment } from 'react';
import {Container} from 'react-bootstrap'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListCategorys from './core/views/category/ListCategories';
import MyRoutes from './core/routing/Routes';
import Header from './core/layout/Header';

const App =()=> {
  return (
      <div className="App">
    
          <Header/>
          <main className='py-3'>
                <Container>              
                          <Router>               
                                    <Switch>
                                        <Route exact path="/" component={ListCategorys} /> 
                                        <Route component={MyRoutes} />
                                    </Switch>
                          </Router>          
                </Container>           
          </main>       
    </div>       
  );
}

export default App;
