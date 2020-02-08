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

export const ProScreen = ({ navigation }) => {
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
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581012659/WhatsApp_Image_2020-02-01_at_1.05.35_PM.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Admin
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
            I decided to carry out this project to help the members of the public, especially the new students find locations easily around the school environment,, this project is restricted to cross river university of technology calabar campus

        </Text>
          <Text >
            i want to thank God for the inspiration to start this project even when material was not easily found to help me work efficiently, i also want to thank my project supervisor in the person of Dr. Orok Duke for his encouragement and support through out this research work
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

    height: 192,
    width: 600
  },
  container: {
    flex: 1,
  },
});