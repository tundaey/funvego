import { StyleSheet} from 'react-native'
import { Fonts } from '../utils/Fonts'

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        
    },
    primary_title: {
        fontFamily: Fonts.OpenSans,
        fontSize: 36,
        color: '#ffffff'
    },
    secondary_title: {
        fontFamily: Fonts.OpenSans,
        fontSize: 18,
        marginTop: 20,
        marginBottom: 40,
        textAlign: 'center',
        maxWidth: "100%",
        marginLeft: 20,
        marginRight: 20,
        color: '#ffffff',
        
    },
    small_text: {
        fontFamily: Fonts.OpenSans,
        fontSize: 12,
        marginTop: 10,
        color: '#ffffff'
    },

    form_label_text: {
        fontFamily: Fonts.OpenSansLight, 
        fontWeight: '200',
        marginBottom: -30,
        fontSize: 20,
        color: '#ffffff'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#308BDB',
      opacity: 0.8
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    form_input: {
        fontFamily: Fonts.OpenSansLight,
        paddingLeft: 45, 
        color: "#fff", 
        fontSize: 20, 
        paddingBottom:10
    },
    forgot_password_link: {
        fontFamily: Fonts.OpenSans,
        fontSize: 12,
        marginTop: 10,
        color: '#ffffff',
        marginTop: 50,
        marginLeft: 180,
    },
    validation_message: {
        fontFamily: Fonts.OpenSans,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    }
  });