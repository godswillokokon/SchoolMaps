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
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581176074/Screenshot_20200201-130820_jgduzv.png  ' }}
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
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581177050/WhatsApp_Image_2020-02-01_at_1.05.33_PM_2_yh17n7.jpg' }}
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
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581176075/Screenshot_20200201-131618_xpmnut.png' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Department of works
    </Text>
    </React.Fragment>
  );
  const PRE = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581180483/Screenshot_20200208-174351_gdph78.png ' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        PREFAB
    </Text>
    </React.Fragment>
  );
  const MIS = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581179978/Screenshot_20200208-172937_bo1bwg.png ' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        MIS
    </Text>
    </React.Fragment>
  );
  const HallOne = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581176072/Screenshot_20200201-131011_trwiip.png ' }}
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
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581176075/Screenshot_20200201-131045_hiadlz.png' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Hall 2
    </Text>
    </React.Fragment>
  );
  const EngWork = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581176070/Screenshot_20200201-131642_yrmlsp.png' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Engineering work shop
    </Text>
    </React.Fragment>
  );

  const Lab = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581176069/Screenshot_20200201-130923_iabz6k.png' }}
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
        source={{ uri: 'https://res.cloudinary.com/dnzgtmimy/image/upload/v1581177263/WhatsApp_Image_2020-02-01_at_1.17.11_PM_yw9hlh.jpg ' }}
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

        <Card style={{ margin: 10 }} header={Gate}>


        </Card>
        <Card style={{ margin: 10 }} header={Admin}>


        </Card>
        <Card style={{ margin: 10 }} header={Mass}>


        </Card>
        <Card style={{ margin: 10 }} header={Lib}>


        </Card>
        <Card style={{ margin: 10 }} header={Work}>


        </Card>
        <Card style={{ margin: 10 }} header={PRE}>


        </Card>
        <Card style={{ margin: 10 }} header={MIS}>


        </Card>
        <Card style={{ margin: 10 }} header={HallOne}>


        </Card>
        <Card style={{ margin: 10 }} header={HallTwo}>


        </Card>
        <Card style={{ margin: 10 }} header={EngWork}>


        </Card>
        <Card style={{ margin: 10 }} header={Lab}>


        </Card>
        <Card style={{ margin: 10 }} header={NSB}>


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