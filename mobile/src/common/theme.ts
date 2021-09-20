import { extendTheme } from 'native-base';
import { Platform } from 'react-native';

const theme = extendTheme({
  colors: {
    primary: {
      400: '#3fbffe',
    },
  },
  config: {
    initialColorMode: 'light',
  },

  fonts: {
    heading: 'PlayfairDisplay_400Regular',
    body: 'PlayfairDisplay_400Regular',
  },
  components: {
    Badge: {
      defaultProps: {
        colorScheme: 'primary',
      },
      baseStyle: {
        borderRadius: 30,
      },
    },
    Button: {
      baseStyle: {
        marginVertical: 10,
        borderRadius: 60,
        height: '50px',
        width: '70%',
        alignSelf: 'center',
      },
      defaultProps: {},
    },
    Input: {
      baseStyle: {
        marginBottom: 5,
        justifyContent: 'center',
        paddingTop: 8,
        borderRadius: 10,
        height: 60,
      },
    },
    Link: {},
    Text: {
      baseStyle: {
      },
      defaultProps: {
        fontSize: Platform.OS === 'ios' ? 'lg' : 'sm',
      },
    },
  },
});

export default theme;
