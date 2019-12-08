import React from 'react';
import { ApplicationProvider, Button, Icon, Layout, Text, IconRegistry, } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';



export const FacebookIcon = (style) => (
  <Icon {...style} name='google' pack='material' />
);
const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text catetory='h1'>Welcome to CRUTECH Maps</Text>
    <Button> Login with Gmail</Button>
  </Layout>
);

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <HomeScreen />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;