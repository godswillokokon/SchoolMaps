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
      <TopNavigation title='CRUTECH Map' alignment='center' />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text catetory='h1'>Welcome to CRUTECH Maps</Text>
        <Button onPress={navigateLogin} style={{ margin: 30, justifyContent: 'center', alignItems: 'center' }}>Explore</Button>
      </Layout>
    </SafeAreaView>
  );
};