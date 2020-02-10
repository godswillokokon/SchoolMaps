import React from 'react';
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { Divider, Text, Icon, Layout, Button, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export const LoginScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };
  const navigateLogin = () => {
    navigation.navigate('Maps');
  };
  const navigateHighlights = () => {
    navigation.navigate('Highlights');
  };
  const navigateMe = () => {
    navigation.navigate('Me');
  };
  const navigatePro = () => {
    navigation.navigate('Pro');
  };


  const [value, setValue] = React.useState('');

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='CRUTECH Map' alignment='center' leftControl={BackAction()} />
      <Divider />
      <Layout style={styles.container}>

        <Layout style={styles.layout} level='4'>
          <Button onPress={navigateLogin}>Maps</Button>
        </Layout>

        <Layout style={styles.layout} level='3'>
          <Button onPress={navigateHighlights}>Highlights</Button>
        </Layout>

        <Layout style={styles.layout} level='2'>
          <Button onPress={navigateMe}>About Us</Button>
        </Layout>

        <Layout style={styles.layout} level='1'>
          <Button onPress={navigatePro}>About Project</Button>
        </Layout>

      </Layout>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  input: { borderRadius: 20, width: '90%' },
  inputText: { color: '#3366FF' },
  inputLabel: { color: '#3366FF' },
  inputCaption: { color: '#3366FF' },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});