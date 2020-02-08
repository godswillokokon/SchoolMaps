import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button, Divider, Layout, TopNavigation, Text, Card } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';



export const HomeScreen = ({ navigation }) => {

  const navigateLogin = () => {
    navigation.navigate('Login');
  };
  const Home = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581177052/WhatsApp_Image_2020-02-01_at_1.05.33_PM_1_jusfsg.jpg' }}
      />
      <Text catetory='h1' style={styles.headerText}>Welcome to CRUTECH Maps</Text>
    </React.Fragment>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='CRUTECH Map' alignment='center' />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        < Card header={Home}>

        </Card>

        <Button onPress={navigateLogin} style={{ margin: 30, justifyContent: 'center', alignItems: 'center' }}>Explore</Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 24,
    marginVertical: 16,
    alignSelf: 'center'
  },
  headerImage: {

    height: 192,
    width: 400,



  },
  container: {
    flex: 1,
  },
});