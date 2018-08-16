import React from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity, AsyncStorage
} from 'react-native';
import GridView from 'react-native-super-grid';
import Kitchen from './Kitchen.js'
import  List from './List.js'
import { Dimensions } from 'react-native'



let deviceWidth = Dimensions.get('window').width
let deviceheight = Dimensions.get('window').height


export class Home extends React.Component {

    // navigateToList= () => {
    //     this.props.navigation.navigate('List');
    // }


    state = {
        listData: []
    }


    onPress = (name) => {
        if (name == "Kitchen") {
            this.props.navigation.navigate('Living',{h1:name})
        }else if (name == "Living") {
            this.props.navigation.navigate('Living',{h1:name})
        }else if (name == "Bedroom 1") {
            this.props.navigation.navigate('Living',{h1:name})
        }else if (name == "Bedroom 2") {
            this.props.navigation.navigate('Living',{h1:name})
        }else if (name == "Garage") {
            this.props.navigation.navigate('Living',{h1:name})
        }else if (name == "Patio") {
            this.props.navigation.navigate('Living',{h1:name})
        }

    }
    render() {
         let {openMyDrawer} = this.props;


        const { navigate } = this.props.navigation;
        this.state.listData = this.props.spaceData

        const items = [
            { name: 'Kitchen', mag: require('./assets/kitchen.png')},
            { name: 'Living', mag: require('./assets/living.png')},
            { name: 'Bedroom 1', mag: require('./assets/bedroom.png')},
            { name: 'Bedroom 2', mag: require('./assets/bedroom.png')},
            { name: 'Garage', mag: require('./assets/garage.png')},
            { name: 'Patio', mag: require('./assets/patio.png')},
            { name: 'Bedroom 1', mag: require('./assets/bedroom.png')},
            { name: 'Bedroom 2', mag: require('./assets/bedroom.png')},
            { name: 'Garage', mag: require('./assets/garage.png')},
            { name: 'Patio', mag: require('./assets/patio.png')},
        ];

//
        return (
            <View style = {styles.container}>
                <View style = {{width:deviceWidth,height:50,backgroundColor:'#292C3D'}}>
                    <TouchableOpacity
                        style={{width: 50, height: 50,left:0,paddingTop:0}}
                         onPress={openMyDrawer}
                    >
                        <Image source ={require('./assets/menu.png')} style={{width:27 , height: 25, left: 12, top: 14}}
                        >
                        </Image>
                    </TouchableOpacity>
                    <Text style = {{color:'#ffffff',top:-40,alignSelf:'center',fontFamily:'Open Sans',fontWeight:'bold',fontSize:20}}>TIOS WELCOME</Text>
                </View>


            <GridView
             // itemDimension={120}
                items={this.state.listData}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
                style={styles.gridView}
                renderItem={item => (


                    <View style={[styles.itemContainer,]}>



                        <TouchableOpacity
                            style={{width: 146, height: 146,}}
                            onPress={() => this.onPress(item.name)}
                            // onPress={ this._navigateToAbout }

                        >

                            <Image source = {require('./assets/kitchen.png')} style={{width: 146, height: 146,}}/>
                            <Text style={{ color: 'black',
                                alignSelf: 'center',
                                top: -40,
                                fontFamily:'Open Sans',
                                fontWeight:'bold',
                                fontSize: 18,}}>{ item.name}</Text>
                        </TouchableOpacity>

                    </View>
                )}
            />
            </View>
        );
    }
}

export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    gridView: {

        paddingBottom: 41,
         marginLeft: 28,
         marginRight: 28,
         flex: 1,
         marginTop:30,
         marginBottom:20
    },
    itemContainer: {
       // marginBottom: 10,
        height: 146,
        width: 146,
        alignSelf: 'center'

    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },

})