import { Fragment } from 'react';
import {Container} from 'react-bootstrap'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyRoutes from './core/routing/Routes';
import Header from './core/layout/Header';
import ListOrders from './core/views/order/ListOrders';

const App =()=> {
  return (
      <div className="App">
    
          <Header/>
          <main className='py-3'>
                <Container>              
                          <Router>               
                                    <Switch>
                                        <Route exact path="/" component={ListOrders} /> 
                                        <Route component={MyRoutes} />
                                    </Switch>
                          </Router>          
                </Container>           
          </main>       
    </div>       
  );
}

export default App;
