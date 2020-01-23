import { Platform, StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1, backgroundColor: 'white', marginTop: Platform.OS === 'ios' ? -20 : 0
  },
  avatarStyle: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    marginTop: 16,
    marginLeft: 8,
    padding: 15,
    marginRight: 8,
    backgroundColor: 'white',
    borderRadius: 5
  },
  username: { color: Colors.blueShade, marginLeft: 10, fontWeight: '600', marginTop: 4 },
  smallText: {marginLeft: 4, color: Colors.blueShade, fontWeight: '500', fontSize: 12},
  message: {color: Colors.blueShade, fontWeight: '600', marginTop: 15, fontSize: 16},
  favour: {backgroundColor: '#E2E7EE', alignItems: 'center', justifyContent: 'center', paddingTop: 2, paddingBottom: 2, paddingLeft: 5, paddingRight: 5, borderRadius: 10},
  price: {backgroundColor: Colors.blueShade, alignItems: 'center', justifyContent: 'center', paddingTop: 2, paddingBottom: 2, paddingLeft: 5, paddingRight: 5, borderRadius: 10}
})
