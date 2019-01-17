import React from 'react';
import { View,
    Text,
    Button,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ImageBackground,
    AsyncStorage,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Login extends React.Component {
    static navigationOptions = {
        header: null
    };


    state={

        getValue : '',

    }



    constructor(props) {
        super(props);
    }



    loginService = () =>{
        console.log("loginService called");


        fetch('https://api.tiosplatform.com/oauth/token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'password',
                client_id: '2',
                client_secret: 'zmO6BEWZ74aG4RybIHVAVDHlki8JOl2DrkauMY0W',
                username: 'super@admin.com',
                password: 'super355453',
            }),
        }).then((responseData) => {
            (responseData.json()).then((responseD) => {
                const accessToken = responseD.token_type + ' ' + responseD.access_token
                //alert(accessToken)
                AsyncStorage.setItem("token", accessToken);
                this.setState({"token": accessToken});
                this.props.navigation.navigate('RootSLiderMenu')
            })
        }).catch((error) => {
            console.error(error);
        });


    }


    render() {

        return (
            <View style = {styles.mainContainerStyle}>
                <KeyboardAvoidingView behavior="position"  keyboardVerticalOffset={64} >

                    <Image
                        source={require("./assets/logo.png")}
                        style = {styles.ImgLogoStyle}
                    />
                    <Text style={styles.txtLoginStyle}>LOGIN</Text>

                    <View style={[styles.firstcontView]}>
                        <View style={styles.ImgViewStyle}>
                            <Image source ={require("./assets/user.png")} style={[styles.userpwdicon]}>
                            </Image>
                        </View>


                        <View style={styles.textFieldViewStyle}>
                            <TextInput style={styles.txtFieldInputStyle}
                                       placeholder="Username"
                                       onChangeText={(text) => this.setState({input: text})} />
                        </View>

                    </View>




                    <View style={[styles.firstcontView]}>
                        <View style={styles.ImgViewStyle}>
                            <Image source ={require("./assets/password.png")} style={[styles.userpwdicon]}>
                            </Image>
                        </View>

                        <View style={styles.textFieldViewStyle}>
                            <TextInput style={styles.txtFieldInputStyle}
                                       placeholder="Password"
                                       secureTextEntry
                                       onChangeText={(text) => this.setState({input: text})} />
                        </View>

                    </View>
                </KeyboardAvoidingView>

                <View style={styles.SecondcontView}>
                    <View style={styles.ViewLogin}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=> {this.loginService()}}>
                            <ImageBackground source ={require("./assets/login_button.png")} style={styles.imgLoginButtonStyle}>
                                <Text style={styles.txtButtonStyle}>Login</Text>
                            </ImageBackground>

                        </TouchableOpacity>
                    </View>

                    <View style={styles.ViewForgot}>
                        <TouchableOpacity
                            style={styles.btnForget}
                            onPress={()=> {this.forgotService(this.props)}}>
                            <Text style={styles.txtButtonStyle}>Forgot Password ?</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    }
}


export default Login
const styles = StyleSheet.create({

    mainContainerStyle:{
        flex: 1,
        backgroundColor: '#FFF',

    },

    firstcontView: {
        width: wp('100%'),
        height: hp('6.296%'),
        marginTop: 18,
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottomColor: 'gray',
        borderTopColor: 'gray',
        flexDirection: 'row'
    },

    userpwdicon:{
        width: 20,
        height: 20,
    },

    button: {
        height: hp('6.296'),
        width: wp('52.266%'),
        borderBottomRightRadius: hp('6.296%')/2,
        borderTopRightRadius: hp('6.296%')/2,
    },

    btnForget: {

        height: 18,
        width: 126,
    },

    ImgLogoStyle:{

        width: '100%',
        height: hp('39.730%'),
        marginTop: 20
    },

    txtLoginStyle:
        { fontSize: 22,
            alignSelf: 'center',
            marginTop: 18, color: 'black',
            fontFamily:'Open Sans',
            fontWeight:'300'

        },
    txtFieldInputStyle:{
        height: '100%',
        fontSize: 17,
        alignSelf: 'center',
        width:'80%',
        alignSelf: 'flex-start'
    },
    ViewForgot:{flex:0.478,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('6.296')
    },

    ViewLogin:{flex:0.522,},

    SecondcontView:{flexDirection: 'row',
        flex:1,
        top: 26,},

    imgLoginButtonStyle:{
        height: hp('6.296'),
        width: wp('52.266%'),
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',},

    txtButtonStyle:{
        color: '#808080',
        fontFamily:'Open Sans',
        fontWeight:'300',
    },
    ImgViewStyle:
        {   flex:1,
            justifyContent: 'center',
            alignItems: 'center',},

    textFieldViewStyle:{
        flex:5,
        justifyContent: 'center',
        alignItems: 'center',
    },


})
