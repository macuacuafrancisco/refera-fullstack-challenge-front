import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container} from 'react-bootstrap'
import Header from './components/layout/Header';
//REDUX
import {Provider} from 'react-redux'
import store from './redux/store'
import Routes from './components/routing/Routes';
import ListCategories from './components/views/category/ListCategories'

function App() {
   return (
    <div className="App">
        <Provider store={store}>
            <Header/>
            <main className='py-3'>
                  <Container>              
                            <Router>                
                                     <Switch>
                                          <Route exact path="/" component={ListCategories} /> 
                                          <Route component={Routes} />
                                      </Switch>                          
                            </Router>          
                  </Container>           
            </main>         
        </Provider>      
    </div>
  );
}

export default App;
