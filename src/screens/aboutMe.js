import React from 'react';
import {
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Divider, Text, Icon, Layout, Card, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import { EvaIconsPack } from '@ui-kitten/eva-icons';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export const MeScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const Admin = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581175244/DSC_0024_ipnwa4.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Justice Odey Ukanada
    </Text>
    </React.Fragment>
  );

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <TopNavigation title='CRUTECH Map' alignment='center' leftControl={BackAction()} />
        <Divider />

        <Card header={Admin} >
          <Text >
            MY NAME  is justice odey ukanada, from the native of bekwara local government of cross river state.
            A student of computer science in cross river university of technology calabar.
            I believe that this project becomes a working tool for every user. thank you.

        </Text>
        </Card>

      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  headerImage: {

    height: 452,
    width: 400
  },
  container: {
    flex: 1,
  },
});