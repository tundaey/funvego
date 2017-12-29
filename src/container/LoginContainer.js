import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionCreators from '../redux/modules/user'
import { formatUserInfo } from '../utils/utils'

import { Login } from '../components/Login'

class LoginContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            loading: false
        }

        this.updateEmail = this.updateEmail.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    render() {
        return (
            <Login
                onError={this.props.error}
                onLoading={this.props.loading}
                onUpdateEmail={this.updateEmail} 
                onUpdatePassword={this.updatePassword}
                onSubmitForm={this.submitForm}/>
        )
    }

    updateEmail(email){
        this.setState({
            email: email
        })
    }

    updatePassword(password){
        this.setState({
            password: password
        })
    }

    submitForm(){
        const { email, password } = this.state;
        this.props.loginAndHandleUser(email, password)
    }
}

function mapStateToProps({user}){
    return {
        loading: user.loading,
        error: user.error
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(userActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)