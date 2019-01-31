import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { updateUser, apiRequest } from './actions/user-actions';

import { createSelector } from 'reselect';
class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    // this.props.onApiRequest();
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input onChange={this.onUpdateUser} />
          {this.props.user}
        </header>
      </div>
    );
  }
}

const productsSelector = createSelector(
  state => state.products,
  products => products
);

const userSelector = createSelector(
  state => state.user,
  user => user
);

const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products, user) => ({
    products,
    user
  })
);

// const mapStateToProps = (state, props) => {
//   return {
//     products: state.products,
//     user: state.user,
//     userPlusProp: `${state.user} ${props.aRandomProps}`
//   }
// };

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
};

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log('propsFromState: ', propsFromState);
//   console.log('propsFromDispatch: ', propsFromDispatch);
//   console.log('ownProps: ', ownProps);
//   return {};
// }

export default connect(mapStateToProps, mapActionsToProps)(App);
