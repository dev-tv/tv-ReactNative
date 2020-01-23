import React, { Component } from 'react'
import { View, StatusBar, SafeAreaView } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'
import { Colors } from '../Themes'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
      <React.Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: Colors.header }}/>
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.header }}>
          <View style={styles.applicationView}>
            <StatusBar barStyle='light-content'/>
            <ReduxNavigation/>
          </View>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
