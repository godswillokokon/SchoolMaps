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
            The Maldives, officially the Republic of Maldives, is a small country in South Asia,
            located in the Arabian Sea of the Indian Ocean.
            It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
             The Maldives, officially the Republic of Maldives, is a small country in South Asia,
            located in the Arabian Sea of the Indian Ocean.
            It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
             The Maldives, officially the Republic of Maldives, is a small country in South Asia,
            located in the Arabian Sea of the Indian Ocean.
            It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent

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