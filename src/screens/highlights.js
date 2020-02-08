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


export const HighlightsScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const Gate = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581177052/WhatsApp_Image_2020-02-01_at_1.05.33_PM_1_jusfsg.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        CRUTECH Gate
    </Text>
    </React.Fragment>
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
        Admin Block
    </Text>
    </React.Fragment>
  );
  const Lib = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581176074/Screenshot_20200201-130820_jgduzv.png ' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Library
    </Text>
    </React.Fragment>
  );

  const Mass = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581012659/WhatsApp_Image_2020-02-01_at_1.05.35_PM.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Mass Communcation / Estate Management
    </Text>
    </React.Fragment>
  );
  const Work = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581012659/WhatsApp_Image_2020-02-01_at_1.05.35_PM.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Department of works
    </Text>
    </React.Fragment>
  );
  const Boys = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581012659/WhatsApp_Image_2020-02-01_at_1.05.35_PM.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Boys Hostel
    </Text>
    </React.Fragment>
  );
  const ETF = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581012659/WhatsApp_Image_2020-02-01_at_1.05.35_PM.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        ETF
    </Text>
    </React.Fragment>
  );
  const HallOne = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581012659/WhatsApp_Image_2020-02-01_at_1.05.35_PM.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Hall 1
    </Text>
    </React.Fragment>
  );
  const HallTwo = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581012659/WhatsApp_Image_2020-02-01_at_1.05.35_PM.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Hall Two
    </Text>
    </React.Fragment>
  );
  const HallThree = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581012659/WhatsApp_Image_2020-02-01_at_1.05.35_PM.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Hall Three
    </Text>
    </React.Fragment>
  );

  const Lab = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581012659/WhatsApp_Image_2020-02-01_at_1.05.35_PM.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Computer Lab
    </Text>
    </React.Fragment>
  );
  const NSB = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581012659/WhatsApp_Image_2020-02-01_at_1.05.35_PM.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        NSB Block
    </Text>
    </React.Fragment>
  );


  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <TopNavigation title='CRUTECH Map' alignment='center' leftControl={BackAction()} />
        <Divider />
        <Card header={Admin}>


        </Card>
        <Card header={Gate}>


        </Card>
        <Card header={Mass}>


        </Card>
        <Card header={Lib}>


        </Card>
        <Card header={Work}>


        </Card>
        <Card header={Boys}>


        </Card>
        <Card header={ETF}>


        </Card>
        <Card header={HallOne}>


        </Card>
        <Card header={HallTwo}>


        </Card>
        <Card header={HallThree}>


        </Card>
        <Card header={Lab}>


        </Card>
        <Card header={NSB}>


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
    width: 500
  },
  container: {
    flex: 1,
  },
});