import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// const HomePage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/homepage/homepage.component'));
// const ShopPage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/shop/shop.component'));

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      this.setState({
        currentUser: user
      });
    })
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth instanceof Function) {
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInAndSignUp}></Route>
          <Route exact path='/signout' component={SignInAndSignUp}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
