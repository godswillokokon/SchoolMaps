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
  const CustomHeader = () => (
    <React.Fragment>
      <Image
        style={styles.headerImage}
        source={{ uri: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg' }}
      />
      <Text
        style={styles.headerText}
        category='h6'>
        Maldives
    </Text>
    </React.Fragment>
  );

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <TopNavigation title='CRUTECH Map' alignment='center' leftControl={BackAction()} />
        <Divider />
        <Card header={CustomHeader}>

          <Text>
            The Maldives, officially the Republic of Maldives, is a small country in South Asia,
            located in the Arabian Sea of the Indian Ocean.
            It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
        </Text>
        </Card>
        <Card header={CustomHeader}>

          <Text>
            The Maldives, officially the Republic of Maldives, is a small country in South Asia,
            located in the Arabian Sea of the Indian Ocean.
            It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
        </Text>
        </Card>
        <Card header={CustomHeader}>

          <Text>
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