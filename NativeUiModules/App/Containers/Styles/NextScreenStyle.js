import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  text: {
    color: '#36213A', justifyContent: 'center', alignSelf: 'center', textAlign: 'center', fontSize: 20, marginTop: 20,
  },
})
