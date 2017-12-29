import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { registerCustomIconType } from 'react-native-elements'
import fontelloConfig  from './assets/fontello/config.json'
import { createIconSetFromFontello } from 'react-native-vector-icons';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionCreators from './src/redux/modules/user'
import { formatUserInfo } from './src/utils/utils'

import Events from './src/components/Events'

import LoginContainer from './src/container/LoginContainer'
import SignupContainer from './src/container/SignupContainer'

import { Switch, Route, NativeRouter, Redirect} from 'react-router-native'

import firebase from 'react-native-firebase'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  console.log('authed', authed)
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/Events' />}
    />
  )
}


export class App extends React.Component {
  state = {
    fontLoaded: false,
    authed: false,
    loading: false
  }

  componentDidMount() {
      this.props.fetchUser()
      registerCustomIconType(
          'fontello',
          createIconSetFromFontello(fontelloConfig)
      )

    this.setState({ fontLoaded: true });
    firebase.auth().onAuthStateChanged((user)=> {
      if(user){
        const userData = user._user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, userData.uid)
        const uid = user._user.uid
        this.props.authUser(uid)
        this.props.fetchingUserSuccess(userInfo, uid)
      }else{
        console.log('props', this.props)
        this.props.unAuthUser()
        this.props.removeFetching()   
        
      }
    })
  }

  componentWillUnmount(){
    //this.authSubscription();
  }

  render() {
    return (
      this.state.fontLoaded ? (
        this.props.isFetching === false ? (
          <NativeRouter>
            <Switch>
              <PublicRoute exact authed={this.props.isAuthed} path='/' component={LoginContainer} />
              <PublicRoute exact authed={this.props.isAuthed} path='/Signup' component={SignupContainer} />
              <PrivateRoute exact authed={this.props.isAuthed} path='/Events' component={Events} />
            </Switch>
          </NativeRouter>
        ): null
      ): <View><Text>Font not loaded</Text></View>
    );
  }
}

function mapStateToProps({user}){
  return {
    isAuthed: user.isAuthed,
    isFetching: user.isFetching
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


