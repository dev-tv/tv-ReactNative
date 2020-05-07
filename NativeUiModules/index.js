import { Navigation } from 'react-native-navigation'
import { registerScreens } from './App/Containers/screens'

registerScreens()
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'LaunchScreen',
            },
          },
        ],
      },
    },
  })
})
