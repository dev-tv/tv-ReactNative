import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'

// Styles
import styles from './Styles/NextScreenStyle'

export default class NextScreen extends Component {
  static get options () {
    return {
      topBar: {
        title: {
          text: 'NextScreen',
        },
      },
    }
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text
            style={styles.text}>NextScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
