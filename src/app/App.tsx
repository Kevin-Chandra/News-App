/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import RootNavigation from './RootNavigation';
import '@core/utils/i18n';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <RootNavigation />;
}

export default App;
