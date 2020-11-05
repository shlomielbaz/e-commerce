import { React } from 'react';
import './App.css';
import { Route, BrowserRouter as Router  } from 'react-router-dom';

import HomePage  from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

// const HomePage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/homepage/homepage.component'));
// const ShopPage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/shop/shop.component'));

function App() {
  return (
    <div>
      
      <Router>
      <Header />
        <Route exact path='/' component={HomePage }></Route>
        <Route exact path='/shop' component={ShopPage }></Route>
      </Router>
    </div>
  );
}

export default App;
