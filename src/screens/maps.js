import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Dimensions, StyleSheet, PermissionsAndroid, } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import PropTypes from 'prop-types';


const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000,
};



const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 4.926956;
const LONGITUDE = 8.330295;
const LATITUDE_DELTA = 0.0201 / 2;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const MapsScreen = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title='CRUTECH Map' alignment='center' leftControl={BackAction()} />
      <Divider />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }}
        mapType="satellite"
        showsUserLocation={true}

      >
        <Marker
          coordinate={{
            latitude: 4.9256721,
            longitude: 8.3299248
          }}
          title="New  Science  Block  2"
          description="LECTURE HALL"

        />

        <Marker
          coordinate={{
            latitude: 4.9256721,
            longitude: 8.3299248
          }}
          title="Crutech Male Hostel"
          description="HOSTEL"

        />

        <Marker
          coordinate={{
            latitude: 4.9260745,
            longitude: 8.3293955
          }}
          title="Urban and regional Planning Studio"
          description="STUDIO"

        />


        <Marker
          coordinate={{
            latitude: 4.9266998,
            longitude: 8.3285267
          }}
          title="Mass Communication, Architecture Department"
          description="Department"

        />

        <Marker
          coordinate={{
            latitude: 4.9267021,
            longitude: 8.3289007
          }}
          title="Post Graduate School"
          description="Post Graduate"

        />
        <Marker
          coordinate={{
            latitude: 4.9277183,
            longitude: 8.3296246,
          }}
          title="CBT Center"
          description="CBT Center"

        />

        <Marker
          coordinate={{
            latitude: 4.9280179,
            longitude: 8.3295076,
          }}
          title="Old Computer Science Block"
          description="Old Computer Science"

        />

        <Marker
          coordinate={{
            latitude: 4.9280179,
            longitude: 8.3295076,
          }}
          title="Faculty of Architecture"
          description="Faculty of Architecture"

        />

        <Marker
          coordinate={{
            latitude: 4.9280416,
            longitude: 8.3308589,
          }}
          title="Hall 3 Crutech"
          description="FEMALE HOSTEL"

        />


        <Marker
          coordinate={{
            latitude: 4.9280442,
            longitude: 8.3311166,
          }}
          title="Visual Arts Department"
          description="Department"

        />

        <Marker
          coordinate={{
            latitude: 4.9287231,
            longitude: 8.3308663,
          }}
          title="Hall 2 Crutech"
          description="FEMALE HOSTEL"

        />

        <Marker
          coordinate={{
            latitude: 4.9295288,
            longitude: 8.3309286,
          }}
          title="Hall 1 Crutech"
          description="FEMALE HOSTEL"

        />

        <Marker
          coordinate={{
            latitude: 4.9295315,
            longitude: 8.3311551,
          }}
          title="Crutech SUG Solemn Assembly"
          description="Solemn Assembly"

        />

        <Marker
          coordinate={{
            latitude: 4.9295315,
            longitude: 8.3311551,
          }}
          title="General Store"
          description="General Store"

        />

        <Marker
          coordinate={{
            latitude: 4.9295315,
            longitude: 8.3311551,
          }}
          title="Engineering Old Faculty And Dean's Office"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.9284812,
            longitude: 8.3298714,
          }}
          title="Old Faculty of Physical Science"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.9272299,
            longitude: 8.3283398,
          }}
          title="ELECTRICAL ENGINEERING"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.9278726,
            longitude: 8.328493,
          }}
          title="CIVIL ENGINEERING WORKSHOP"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.9296921,
            longitude: 8.3290337,
          }}
          title="Library"
          description="Library"

        />

        <Marker
          coordinate={{
            latitude: 4.9309294,
            longitude: 8.3286361,
          }}
          title="Information Unit"
          description="Information Unit"

        />

      </MapView>



    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});