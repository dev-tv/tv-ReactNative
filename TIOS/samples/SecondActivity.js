import React,{Component} from "react";
import {Text, StyleSheet, View, Alert, AsyncStorage} from "react-native";

import  SliderBar from  './SliderView';
import  Main  from './Main';
import  Home  from './Home.js';
import  KitchenList from './Living.js'
import Notification from  './Notification.js'

import Drawer from 'react-native-drawer'

export default class SecondActivity extends Component
{

    state = {
        drawerOpen: false,
        drawerDisabled: false,
        mainView:"Main",
        data:[]
      };


    componentWillMount(){
        this.fetchData();
    }


    //fetchData = async () =>{
        /*alert(547)
        const response = await  fetch("https://randomuser.me/api?results=10");
        const json = await response.json()
        this.setState({data:json.results});*/
    fetchData = () =>{

        AsyncStorage.getItem("token").then((value) => {
            if (value != null){
                fetch('https://api.tiosplatform.com/api/user', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'authorization': value
                    }
                }).then((responseData) => {
                    if (responseData.status == 200) {
                        (responseData.json()).then((responseD) => {
                            //////////////////////////////////////

                            fetch('https://api.tiosplatform.com/api/project/' + responseD.organization_id + '/spaces', {
                                method: 'GET',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                    'authorization': value
                                }
                            }).then((responseData) => {
                                if (responseData.status == 200) {
                                    (responseData.json()).then((responseD) => {
                                        debugger
                                        this.setState({data:responseD.spaces});

                                        //////////////////////////////////////
                                        //if (responseD.spaces.count() > 0){
                                        /*  fetch('https://api.tiosplatform.com/api/space/1/datasources', {
                                              method: 'GET',
                                              headers: {
                                                  Accept: 'application/json',
                                                  'Content-Type': 'application/json',
                                                  'authorization': value
                                              }
                                          }).then((responseData) => {
                                              debugger
                                              if (responseData.status == 200) {
                                                  (responseData.json()).then((responseD) => {
                                                      debugger
                                                  })
                                              }
                                          }).catch((error) => {
                                              console.error(error);
                                          });
                                          // }*/

                                        //////////////////////////////////////
                                    })
                                }
                            }).catch((error) => {
                                console.error(error);
                            });

                            //////////////////////////////////////
                        })
                    }
                }).catch((error) => {
                    console.error(error);
                });
            }
        })



    }










    closeDrawer = (drawer) => {
        console.log("clos drawer called")
        if (drawer){
            this.state.mainView = drawer

        }
        this._drawer.close()
    };






    openDrawer = (pageName) => {
        if (pageName == "Home"){
            this.state.mainView = pageName
            this.forceUpdate();
        }
        else {
            if ( this._drawer._open)
            {
                this._drawer.close()
            }
            else {
                this._drawer.open()
            }
        }
    };

    render() {

        let Component = Home;
        if (this.state.mainView == 'Kitchen') {
            Component = KitchenList;
        }else  if (this.state.mainView == 'Living') {
            Component = KitchenList;
        }else  if (this.state.mainView == 'Notifications') {
            Component = Notification;
        }else  if (this.state.mainView == 'Bedroom 1') {
            Component = KitchenList;
        }else  if (this.state.mainView == 'Bedroom 2') {
            Component = KitchenList;
        }else  if (this.state.mainView == 'Garage') {
            Component = KitchenList;
        }else  if (this.state.mainView == 'Patio') {
            Component = KitchenList;
        }else  if (this.state.mainView == 'Logout') {
                Alert.alert(
                    'TIoS',
                    'Are you sure want to logout?',
                    [
                        {text: 'Cancel', onPress: () => {
                            console.log('Cancel Pressed');
                            }, style: 'cancel'},
                        {text: 'OK', onPress: () => {
                                AsyncStorage.clear();
                                this.props.navigation.popToTop()
                               }
                            },
                    ],
                    {cancelable: false}
                )
        }



        return (
            <Drawer
                ref={(ref) => {
                    this._drawer = ref

                }  }
                type="static"
                content={
                    <SliderBar closeDrawer={this.closeDrawer}  spaceData={this.state.data}/>
                }
                acceptDoubleTap
                styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
                onOpen={() => {
                    console.log('onopen')
                    this.setState({drawerOpen: true})
                }}
                onClose={() => {
                    console.log('onclose')
                    this.setState({drawerOpen: false})
                }}
                captureGestures={false}
                tweenDuration={100}
                panThreshold={0.08}
                disabled={this.state.drawerDisabled}
                openDrawerOffset={(viewport) => {
                    return 100
                }}
                closedDrawerOffset={() => 0}
                panOpenMask={0.2}
                negotiatePan
            >
                <Component openMyDrawer = {this.openDrawer} navigation={this.props.navigation} h1={this.state.mainView} spaceData= {this.state.data}></Component>
            </Drawer>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    }
})