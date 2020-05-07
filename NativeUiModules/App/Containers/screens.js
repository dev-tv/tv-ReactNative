import { Navigation } from 'react-native-navigation'

export function registerScreens () {
  Navigation.registerComponent('LaunchScreen', (sc) => require('./LaunchScreen').default)
  Navigation.registerComponent('NextScreen', () => require('./NextScreen').default)
}
