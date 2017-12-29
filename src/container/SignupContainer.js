import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Signup } from '../components/Signup'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionCreators from '../redux/modules/user'

class SignupContainer extends React.Component {
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

    componentDidMount(){
        
    }
    

    render() {
        return (
            <Signup
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
        this.props.signUpAndHandleUser(email, password)
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)