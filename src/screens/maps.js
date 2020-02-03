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
            latitude: 4.9276895,
            longitude: 8.3275487
          }}
          title="New  Science  Block 1"
          description="LECTURE HALL"

        />

        <Marker
          coordinate={{
            latitude: 4.926574,
            longitude: 8.3267533
          }}
          title="Coma Cola Hut"
          description="Restaurant"

        />
        <Marker
          coordinate={{
            latitude: 4.927248,
            longitude: 8.330589,
          }}
          title="Volleybal Court"
          description="Court"

        />
        <Marker
          coordinate={{
            latitude: 4.931418,
            longitude: 8.328324
          }}
          title="Round about"
          description="Round about"

        />
        <Marker
          coordinate={{
            latitude: 4.9757177,
            longitude: 8.3417014
          }}
          title="The Chapel Of Grace"
          description="Church"

        />
        <Marker
          coordinate={{
            latitude: 4.9757177,
            longitude: 8.3417014
          }}
          title="St Josheph CatholicChaplaincy"
          description="Church"

        />
        <Marker
          coordinate={{
            latitude: 4.931513,
            longitude: 8.329648
          }}
          title="Micro Finance Bank"
          description="Bank"

        />
        <Marker
          coordinate={{
            latitude: 4.931418,
            longitude: 8.328324
          }}
          title="Round about"
          description="Round about"

        />
        <Marker
          coordinate={{
            latitude: 4.931008,
            longitude: 8.329702
          }}
          title="Power House"
          description="Generators room"

        />
        <Marker
          coordinate={{
            latitude: 4.926394,
            longitude: 8.331770,
          }}
          title="Staffs Quarter"
          description="Resident"

        />
        <Marker
          coordinate={{
            latitude: 4.927028,
            longitude: 8.3293373,
          }}
          title="Basketball Court"
          description="Court"

        />

        <Marker
          coordinate={{
            latitude: 4.928166,
            longitude: 8.3271123
          }}
          title="Man 'O' War pitch"
          description="Field"

        />

        <Marker
          coordinate={{
            latitude: 4.926914,
            longitude: 8.3267493
          }}
          title="Football Field"
          description="Field"

        />

        <Marker
          coordinate={{
            latitude: 4.924786,
            longitude: 8.3261063
          }}
          title="New  Science  Block 2"
          description="LECTURE HALL"

        />

        <Marker
          coordinate={{
            latitude: 4.924193,
            longitude: 8.3280603
          }}
          title="Crutech Male Hostel"
          description="HOSTEL"

        />


        <Marker
          coordinate={{
            latitude: 4.926181,
            longitude: 8.3278126
          }}
          title="Prefab 1,2,3,4"
          description="LECTURE HALL"

        />

        <Marker
          coordinate={{
            latitude: 4.926133,
            longitude: 8.3281173
          }}
          title="New Education Block"
          description="LECTURE HALL"

        />

        <Marker
          coordinate={{
            latitude: 4.926392,
            longitude: 8.3264923
          }}
          title="ETF 1 AND 2"
          description="LECTURE HALL"

        />

        <Marker
          coordinate={{
            latitude: 4.9278409,
            longitude: 8.3290274
          }}
          title="Urban and Regional Planning"
          description="Department"

        />


        <Marker
          coordinate={{
            latitude: 4.9291473,
            longitude: 8.3276541
          }}
          title="Old Engineering block"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.9292037,
            longitude: 8.327916,
          }}
          title="Engineering Old Faculty And Dean's Office"
          description="Faculty"

        />



        <Marker
          coordinate={{
            latitude: 4.9266998,
            longitude: 8.3276615
          }}
          title="Mass Communication"
          description="Department"

        />

        <Marker
          coordinate={{
            latitude: 4.9277394,
            longitude: 8.3281054
          }}
          title="Post Graduate School"
          description="Post Graduate"

        />
        <Marker
          coordinate={{
            latitude: 4.9277183,
            longitude: 8.3280977,
          }}
          title="CBT Center"
          description="JAMB Center"

        />

        <Marker
          coordinate={{
            latitude: 4.9280166,
            longitude: 8.3278674,
          }}
          title="Old Computer Science Block"
          description="Old Computer Science"

        />
        <Marker
          coordinate={{
            latitude: 4.9277931,
            longitude: 8.3281809,
          }}
          title="Heritage Bank"
          description="Bank"

        />

        <Marker
          coordinate={{
            latitude: 4.9280189,
            longitude: 8.3285027,
          }}
          title="Faculty of Architecture"
          description="Faculty of Architecture"

        />

        <Marker
          coordinate={{
            latitude: 4.9280416,
            longitude: 8.3299937,
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
            latitude: 4.928084,
            longitude: 8.3274878,
          }}
          title="Department of mathematics and statistic"
          description="Department"

        />




        <Marker
          coordinate={{
            latitude: 4.9757177,
            longitude: 8.3417014,
          }}
          title="Hall 2 Crutech"
          description="FEMALE HOSTEL"

        />

        <Marker
          coordinate={{
            latitude: 4.9295288,
            longitude: 8.3300634,
          }}
          title="Hall 1 Crutech"
          description="FEMALE HOSTEL"

        />

        <Marker
          coordinate={{
            latitude: 4.9285651,
            longitude: 8.3296175,
          }}
          title="Crutech SUG Solemn Assembly"
          description="Solemn Assembly"

        />

        <Marker
          coordinate={{
            latitude: 4.928362,
            longitude: 8.3279753,
          }}
          title="General Store"
          description="General Store"

        />

        <Marker
          coordinate={{
            latitude: 4.9293948,
            longitude: 8.3283548,
          }}
          title="Wood Production"
          description="Workshop"

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
          title="Faculty of Physical Science"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.9290162,
            longitude: 8.3271302,
          }}
          title="ELECTRICAL ENGINEERING"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.9290162,
            longitude: 8.3271302,
          }}
          title="Faculty of Architecture"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.9757177,
            longitude: 8.3417014,
          }}
          title="CIVIL ENGINEERING WORKSHOP"
          description="Faculty"

        />
        <Marker
          coordinate={{
            latitude: 4.9424984,
            longitude: 8.3269849,
          }}
          title="Faculty of Education"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.9424984,
            longitude: 8.3269849,
          }}
          title="Mama G Restaurant"
          description="Restaurant"

        />

        <Marker
          coordinate={{
            latitude: 4.9300833,
            longitude: 8.3280253,
          }}
          title="MIS"
          description="MIS"

        />

        <Marker
          coordinate={{
            latitude: 4.9757177,
            longitude: 8.3417014,
          }}
          title="Library"
          description="Library"

        />

        <Marker
          coordinate={{
            latitude: 4.9283671,
            longitude: 8.3269341,
          }}
          title="Department of Works"
          description="Department of Works"

        />
        <Marker
          coordinate={{
            latitude: 4.9267152,
            longitude: 8.3258229,
          }}
          title="Soil Mechanic Laboratory"
          description="Laboratory"

        />
        <Marker
          coordinate={{
            latitude: 4.9265351,
            longitude: 8.3258443,
          }}
          title="Strenght of material Labratory"
          description="Labratory"

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