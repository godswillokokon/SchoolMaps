import React from 'react';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as appTheme } from './custom-theme.json'; // <-- Import app theme

const theme = { ...darkTheme, ...appTheme };

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text catetory='h1'>HOME</Text>
  </Layout>
);

const App = () => (
  <React.Fragment>
    <ApplicationProvider
      mapping={mapping}
      theme={theme}>
      <HomeScreen />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
