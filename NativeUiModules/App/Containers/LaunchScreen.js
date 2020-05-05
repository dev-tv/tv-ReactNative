import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

// We are importing the native Java module here
import { NativeModules } from 'react-native'

let NativeCustom = NativeModules.NativeCustom
const {TaskManager} = NativeModules

export default class LaunchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      loading: false,
    }
  }

  // async function to call the Java native method
  getValueFromNative = async () => {
    this.setState({loading: true})
    if (Platform.OS === 'android') {
      const val = await NativeCustom.getValue()
      console.log('Value from native code ' + val)
      if (val) {
        this.setState({value: val, loading: false})
      } else {
        this.setState({loading: false})
        console.log('Error from native code ')
      }
    } else if (Platform.OS === 'ios') {
      TaskManager.getCalculatedValue().then((value) => {
        console.log('Value from native code ' + value)
        if (value) {
          this.setState({value: value, loading: false})
        }
      }).catch((value) => {
        this.setState({loading: false})
        console.log('Error from native code ' + value)
      })
    }
  }

  render () {
    const {value, loading} = this.state
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo}/>
          </View>
          <TouchableOpacity
            style={styles.click_button}
            onPress={() => {
              this.getValueFromNative()
            }}>
            <Text style={{color: 'white'}}>{'Click me to get value from native method'}</Text>
            {loading &&
            <ActivityIndicator style={{marginLeft: 10}} animating={loading} color={'white'} size={'small'}/>}
          </TouchableOpacity>
          {value !== '' &&
          <Text style={styles.value_text}>Value from native
            method: {value}</Text>}
        </ScrollView>
      </View>
    )
  }
}
