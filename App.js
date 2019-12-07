import React from 'react';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as appTheme } from './custom-theme.json'; // <-- Import app theme
import { AppNavigator } from './navigation.component'
const theme = { ...darkTheme, ...appTheme };

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider
      mapping={mapping}
      theme={theme}>
      <AppNavigator />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
