import React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text catetory='h1'>HOME</Text>
  </Layout>
);

const App = () => (
  <ApplicationProvider mapping={mapping} theme={darkTheme}>
    <HomeScreen />
  </ApplicationProvider>
);

export default App;