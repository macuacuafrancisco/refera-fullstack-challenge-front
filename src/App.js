import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListCategorys from './core/views/category/ListCategories';
import MyRoutes from './core/routing/Routes';


function App() {
  return (
    <div className="App">   
        
            <main className='py-3'>
                  <Fragment>              
                            <Router>               
                                      <Routes>
                                          <Route exact path="/" component={ListCategorys} /> 
                                          <Route component={MyRoutes} />
                                      </Routes>
                            </Router>          
                  </Fragment>           
            </main>            
    </div>
  );
}

export default App;
