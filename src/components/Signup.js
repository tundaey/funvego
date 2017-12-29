import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { Button, FormInput, FormLabel, FormValidationMessage, Icon, registerCustomIconType } from 'react-native-elements'
import { Link } from 'react-router-native'

import { styles } from '../utils/styles'
import { Form } from '../components/AuthForm'

export const Signup = (props)=> {
    return (
        <ImageBackground source={require('../../assets/images/994.png')} style={styles.backgroundImage}>

            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={{alignItems: 'center'}}>
                            
                        <Text style={styles.primary_title}>
                            Join Funvego
                        </Text>

                        <Text style={styles.secondary_title}>
                            Create an account in 2 simple steps and start planning
                        </Text>

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
                            title='Create an account'
                            loading={props.onLoading}
                            onPress={props.onSubmitForm} />

                        <Text style={styles.small_text}>
                            Already have an account?
                        </Text>

                        <Link to="/">
                            <Text style={styles.small_text}>Sign In</Text>
                        </Link>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

