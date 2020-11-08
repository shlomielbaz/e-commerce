import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
// const HomePage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/homepage/homepage.component'));
// const ShopPage = React.lazy(() => import(/* webpackPrefetch: true */ './pages/shop/shop.component'));

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {

          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });

        });
      }

      setCurrentUser( userAuth );
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth instanceof Function) {
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <div>
          <Header />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
          <Route exact path='/signout' component={SignInAndSignUp} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
