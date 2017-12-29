import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionCreators from '../redux/modules/user'

export class Events extends React.Component {
    render() {
        console.log('events')
        return (
            <View>
                <Button 
                    raised 
                    large 
                    backgroundColor='#308BDB'
                    fontFamily='open-sans-regular'
                    color='#fff'
                    containerViewStyle={{width: '80%', marginTop: 20}}
                    borderRadius={40}
                    title='Logout'
                    onPress={()=> this.props.logoutAndUnAuth()} />
            </View>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(userActionCreators, dispatch)
}

export default connect(null, mapDispatchToProps)(Events)