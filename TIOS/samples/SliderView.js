import React,{Component} from "react";
import {
    PropTypes,
    StyleSheet,
    Text,
    Image,
    View,
    FlatList

} from "react-native";

import { Container,List,ListItem, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



export default class SliderView extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                { name: "Spaces", header: false,img:require('./Resource/menu/spaces.png'), colorback: '#2B2F48' },
                { name: "Kitchen", header: true,img:require('./Resource/menu/kitchen.png'), colorback: '#292C3D' },
                { name: "Living", header: true ,img:require('./Resource/menu/living.png'), colorback: '#292C3D'},
                { name: "Bedroom 1", header: true,img:require('./Resource/menu/badroom.png'), colorback: '#292C3D' },
                { name: "Bedroom 2", header: true,img:require('./Resource/menu/badroom.png') , colorback: '#292C3D'},
                { name: "Garage", header: true,img:require('./Resource/menu/garage.png'), colorback: '#292C3D' },
                { name: "Patio", header: true,img:require('./Resource/menu/patio.png'), colorback: '#292C3D' },
                { name: "About us", header: false ,img:require('./Resource/menu/about_us.png'), colorback: '#2B2F48'},
                { name: "Support", header: false,img:require('./Resource/menu/support.png'), colorback: '#2B2F48' },
                { name: "Notifications", header: false,img:require('./Resource/menu/notifications.png'), colorback: '#2B2F48' },
                { name: "Logout", header: false,img:require('./Resource/menu/logout.png'), colorback: '#2B2F48' }
            ],
            stickyHeaderIndices: [],
            drawer:null,
            listData: []
        };
    }
    componentWillMount() {
        var arr = [];
        arr.push({ name: "Spaces", header: false,img:require('./Resource/menu/spaces.png') })

        this.state.data.map(obj => {
            if (obj.header) {
                arr.push(this.state.data.indexOf(obj));
            }
        });
        arr.push( { name: "About us", header: false ,img:require('./Resource/menu/about_us.png')},
            { name: "Support", header: false,img:require('./Resource/menu/support.png')},
            { name: "Notifications", header: false,img:require('./Resource/menu/notifications.png') },
            { name: "Logout", header: false,img:require('./Resource/menu/logout.png')});
        //alert(arr)

    }
    onPress = (name) => {
        console.log(name)
        this.state.drawer(name);
    }
    updateData = () => {

        alert(142)
    }


    renderItem = ({ item }) => {
        if (item.header) {
            return (
                <ListItem style={{ marginLeft: 0 ,height:40, flex :1,flexDirection:'row',backgroundColor:'#292C3D'}} onPress={() => this.onPress(item.name)}>
                    <View style={{marginLeft: 20,flex:1.2, alignItems: 'center'}}>
                        <Image style = {styles.imgStyle}
                               source = {item.img}></Image>
                    </View>
                    <Text style={styles.controlText}>{item.name}</Text>

                </ListItem>
            );
        } else if (!item.header) {
            return (
                <ListItem style={{ marginLeft: 0 ,height:45, flex :1,flexDirection:'row',backgroundColor:'#2B2F48'}}  onPress={() => this.onPress(item.name)}>
                    <View style={{flex:1, alignItems: 'center'}}>
                        <Image style = {styles.imgStyle}
                               source = {item.img}></Image>
                    </View>
                    <Text style={styles.controlText}>{item.name}</Text>
                </ListItem>
            );
        }
    };


    /*
      static propTypes = {
        closeDrawer: PropTypes.func.isRequired
      };
    * */




    render() {
        let {closeDrawer} = this.props;
        this.state.drawer = closeDrawer;
        this.state.listData = this.props.spaceData
        this.updateData()
        return (
            <Container>
                <Grid>
                    <Row style={{ flex:1.3 }}>
                        <Col style={{ backgroundColor: '#b70e13' }}>
                            <View style={[styles.box]} >
                                <BackgroundImage></BackgroundImage>
                            </View>
                        </Col>
                    </Row  >
                    <Row style={{ flex:3 }}>
                        <Col style={{ backgroundColor: '#292C3D' }}>
                            <FlatList
                                data={this.state.data}
                                renderItem={this.renderItem}
                                keyExtractor={item => item.name}
                            />
                        </Col>
                    </Row>
                </Grid>
            </Container>
        )
    }
}




class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('./Resource/menu/logo.png')}
                   style={styles.backgroundImage}>
                {this.props.children}
            </Image>
        )
    }
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#333',

    },
    imgStyle:{
        height:25,
        width: 25,

    },
    container: {
        flex: 1,
        paddingTop:35,
        backgroundColor: '#333',
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    box: {
        flex: 1,
        paddingTop:45,
        backgroundColor: '#333',

    },
    listItems:{
        height:55,
    },

    controlText: {
        color: 'white',
        flex: 3,
        fontFamily:'Open Sans',
        fontSize:15,
        height:25,

    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

});