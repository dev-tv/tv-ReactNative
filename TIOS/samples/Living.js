import React, { Component } from 'react';
import {StyleSheet, FlatList, Text, View, Alert,ImageBackground ,Image,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native'
import Home from './Home.js'
import Schedule from './Calender.js';
import AirSetting from './AirSetting.js'


const onImg = './assets/toggle_on.png';
const offImg = './assets/toggle_off.png';
export class Living extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            comeFrom:"noWhere",
            openDraerFun:null,
            FlatListItems: [
                {
                    id: 0,
                    name: 'Lights',
                    mag: require('./assets/box.png'),
                    leftmag: require('./assets/light_off.png'),
                    onImg : require('./assets/toggle_on.png'),
                    offImg : require('./assets/toggle_off.png'),
                },
                {
                    id: 1,
                    name: 'Air Condition',
                    mag: require('./assets/box.png'),
                    leftmag: require('./assets/ac_off.png'),
                    centermag: require('./assets/demo_meter.png'),
                    onImg : require('./assets/toggle_on.png'),
                    offImg : require('./assets/toggle_off.png'),
                },
            ]}
    }



    GetItem (item) {
        Alert.alert(item);
    }

    _onPress(){
        const newState = !this.state.toggle;
        this.setState({ toggle:newState})


    }

    showToggelImg = () =>{
        let newImg = require('./assets/toggle_off.png')
        if (this.state.toggle){
            newImg = require('./assets/toggle_on.png')
        }

        return (
            <Image source ={newImg} style={{width: 45, height: 22,}}>
            </Image>
        );
    }



    moveTonextView = () =>
    {
        if (this.state.comeFrom == "noWhere"){
            this.state.openDraerFun("Home")
        }else{
            console.log("here is new msg")
            this.props.navigation.pop()
        }
    }

    onPress = (id) => {
        if (id == 0) {
            this.props.navigation.navigate('Schedule')
        }else if (id == 1) {
            this.props.navigation.navigate('AirSetting')
        }
    }



    render() {

        let {openMyDrawer} = this.props


         //let  imgtoggle = toggle? onImg:offImg;
       // alert(imgtoggle)
       // newImg = require(imgtoggle);
        const {params} = this.props.navigation.state
        if (params){
            this.state.comeFrom = params.ComeFrom
        }
        this.state.openDraerFun = openMyDrawer

        var  {haderTitle} = ""
        if(this.props.navigation.state.params) {
            haderTitle = this.props.navigation.state.params.h1
        }else{
            haderTitle = this.props.h1
        }
        return (

            <View style={styles.MainContainer}>


                <View style = {{width:deviceWidth,height:50,backgroundColor:'#292C3D',}}>
                    <TouchableOpacity
                        style={{width: 50, height: 50,left:0,paddingTop:0}}
                        onPress={this.moveTonextView}
                    >
                        <Image source ={require('./assets/back.png')} style={{width: 50, height: 50,}}
                        >
                        </Image>
                    </TouchableOpacity>
                    <Text style = {{color:'#ffffff',top:-40,alignSelf:'center',fontFamily:'Open Sans',fontWeight:'bold',fontSize:20}}>{'TIOS' +" - "+ haderTitle}</Text>
                </View>






                <View style = {styles.cont}>
                    <FlatList
                        data={ this.state.FlatListItems }
                        renderItem={({item}) =>
                            <View style = {styles.list}>

                                <View style={{ zIndex: 1,alignSelf: 'center'}}>
                                    <Image source ={item.leftmag} style={{ width: wp('17.06%'), height: hp('9.59%')}}>
                                    </Image>
                                </View>


                                <ImageBackground source ={item.mag} style = {styles.listimg}>
                                    <View style={{flex: 1, justifyContent:'center',}}>
                                    </View>

                                    <View style={{flex: 2.7, }}>
                                        <Text style = {styles.text}>
                                            {item.name}
                                        </Text>

                                        <Image source ={item.centermag} style={{width: 70, height: 40,  alignSelf: 'center', position: 'absolute',
                                            bottom: 6}}>
                                        </Image>
                                    </View>



                                    <View style={{flex: 1,}}>

                                        <TouchableOpacity
                                            style={{width: 26, height: 26, top: 10, alignSelf: 'flex-end', position: 'absolute', right: 10}}
                                            onPress={() => this.onPress(item.id)}>
                                            <Image source ={require('./assets/setting.png')} style={{width: 26, height: 26,}}>
                                            </Image>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={{width: 45, height: 22, alignSelf: 'center', position: 'absolute',
                                                bottom: 14}}
                                            onPress={()=>this._onPress()}>
                                            {this.showToggelImg()}
                                        </TouchableOpacity>

                                    </View>

                                </ImageBackground>

                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}

let deviceWidth = Dimensions.get('window').width
let deviceheight = Dimensions.get('window').height

const styles = StyleSheet.create({

    MainContainer :{
        flex:1,
        // paddingTop: 20,
        backgroundColor: 'white',
        justifyContent:'center'
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    cont: {
        paddingTop: 12,
        flex: 1,
        marginLeft: 14,
        marginRight: 16,
        //alignSelf:'center'

    },
    list: {
        height: hp('17.99%'),
        marginTop: '2%',
        flex: 1,
        zIndex: 0,
        flexDirection: 'row',
        // backgroundColor: '#d9f9b1',
        // backgroundColor: 'transparent'
    },
    listimg: {
        height: hp('17.99%'),
        marginLeft: -wp('17.06%')/2,
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowColor: 'gray',
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        color: 'black',
        fontSize: 24,
        alignSelf: 'center',
        top: 40,
        fontFamily:'Open Sans'
        ,fontWeight:'300'
    }
});

export default Living;