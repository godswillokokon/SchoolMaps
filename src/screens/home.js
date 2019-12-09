import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button, Divider, Layout, TopNavigation, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';



export const HomeScreen = ({ navigation }) => {

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text catetory='h1'>Welcome to CRUTEC Maps</Text>
        <Button onPress={navigateLogin}> Login with Gmail</Button>
      </Layout>
    </SafeAreaView>
  );
};