import React from 'react';
import { Text, View, Image } from 'react-native';

import { Button, FormInput, FormLabel, FormValidationMessage, Icon, registerCustomIconType } from 'react-native-elements'

import { styles } from '../utils/styles'

export const Form = (props)=> {
    return (
        <View>
            <View style={{maxWidth: "90%"}}>
                <View style={{flexDirection:'row', marginBottom: -45}}>
                    <Icon color="white" type="fontello" name="mail-(1)" iconStyle={{marginLeft: 20, marginTop: 15}} />  
                </View>
                <FormInput
                    onChangeText={props.onUpdateEmail}
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor="#fff"
                    containerStyle={{borderBottomColor: '#fff', marginTop: 9}}
                    inputStyle={styles.form_input} 
                    underlineColorAndroid="#fff"/>
            </View>
            <View style={{maxWidth: "90%", marginBottom: 20}}>
                <View style={{flexDirection:'row', marginBottom: -42}}>
                    <Icon color="white" type="fontello" name="unlocked" iconStyle={{marginLeft: 15, marginTop: 15}} />
                </View>
                            
                <FormInput
                    onChangeText={props.onUpdatePassword}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#fff"
                    containerStyle={{borderBottomColor: '#fff', marginTop: 10}}
                    inputStyle={styles.form_input} 
                    underlineColorAndroid="#fff"/>
            </View>
            
        </View>
    )
}