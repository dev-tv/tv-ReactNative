import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  click_button: {
    backgroundColor: '#36213A', padding: 10, borderRadius: 10, margin: 10, flexDirection: 'row', alignItems: 'center'
  },
  value_text: {
    color: '#36213A', fontSize: 24, alignSelf: 'center', marginTop: 20, textAlign: 'center'
  }
})
