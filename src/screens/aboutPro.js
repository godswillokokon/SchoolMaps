import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Text, Icon, Layout, Button, TopNavigation, TopNavigationAction, Card } from '@ui-kitten/components';

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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='CRUTECH Map' alignment='center' leftControl={BackAction()} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Card>
          <Text>
            About Project
         </Text>
        </Card>

      </Layout>
    </SafeAreaView>
  );
};