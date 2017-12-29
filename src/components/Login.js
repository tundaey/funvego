import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';

import { Button, FormInput, FormLabel, FormValidationMessage, Icon, registerCustomIconType } from 'react-native-elements'

import { Link } from 'react-router-native'
import firebase from 'react-native-firebase'

import { Form } from '../components/AuthForm'
import { styles } from '../utils/styles'

export const Login = (props)=> {
    return (
        <ImageBackground source={require('../../assets/images/994.png')} style={styles.backgroundImage}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={{alignItems: 'center'}}>

                        <Image 
                            style={{width: 400, height: 150, marginBottom: -10}}
                            source={require('../../assets/images/logo.png')}/>
                        <Text style={styles.secondary_title}>Make plans, Invite friends, and share your personal calendar</Text>
                            
                        <Form
                            onUpdateEmail={props.onUpdateEmail}
                            onUpdatePassword={props.onUpdatePassword}/>

                        <FormValidationMessage labelStyle={styles.validation_message}>
                            {props.onError}
                        </FormValidationMessage>
                            
                        <Button 
                            raised 
                            large 
                            backgroundColor='#fff'
                            fontFamily='open-sans-regular'
                            color='#308BDB'
                            containerViewStyle={{width: '80%', marginTop: 20}}
                            borderRadius={40}
                            title='Sign In'
                            loading={props.onLoading}
                            onPress={props.onSubmitForm} />
                            
                        <Text style={styles.small_text}> Don't have an account?</Text>
                            
                        <Link to="/Signup">
                            <Text style={styles.small_text}>Signup</Text>
                        </Link>

                        <Text style={styles.forgot_password_link}>Forgot Password?</Text>
                    </View>
                </View>
            </View>
                
        </ImageBackground>
    )
    
}

