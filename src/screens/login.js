import React from 'react';
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { Divider, Input, Icon, Layout, Button, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export const LoginScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };
  const navigateLogin = () => {
    navigation.navigate('Maps');
  };

  const [value, setValue] = React.useState('');

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='CRUTECH Map' alignment='center' leftControl={BackAction()} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Input
          placeholder='john.doe@example.com'
          value={value}
          size='small'
          style={styles.input}
          textStyle={styles.inputText}
          labelStyle={styles.inputLabel}
          captionTextStyle={styles.inputCaption}
          onChangeText={setValue}
        />
        <Button onPress={navigateLogin}> Login </Button>
      </Layout>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  input: { borderRadius: 20, width: '90%' },
  inputText: { color: '#3366FF' },
  inputLabel: { color: '#3366FF' },
  inputCaption: { color: '#3366FF' },
});