import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { Dimensions, StyleSheet, PermissionsAndroid, } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


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
            latitude: 4.924636,
            longitude: 8.329236
          }}
          title="New  Science  Block 1"
          description="LECTURE HALL"

        />

        <Marker
          coordinate={{
            latitude: 4.926572,
            longitude: 8.328932
          }}
          title="Coma Cola Hut"
          description="Restaurant"

        />
        <Marker
          coordinate={{
            latitude: 4.927540,
            longitude: 8.330644,
          }}
          title="Volleybal Court"
          description="Court"

        />
        <Marker
          coordinate={{
            latitude: 4.931420,
            longitude: 8.328315
          }}
          title="Round about"
          description="Round about"

        />
        <Marker
          coordinate={{
            latitude: 4.931912,
            longitude: 8.329860
          }}
          title="The Chapel Of Grace"
          description="Church"

        />
        <Marker
          coordinate={{
            latitude: 4.931890,
            longitude: 8.331572
          }}
          title="St Josheph CatholicChaplaincy"
          description="Church"

        />
        <Marker
          coordinate={{
            latitude: 4.931612,
            longitude: 8.329667
          }}
          title="Micro Finance Bank"
          description="Bank"

        />
        <Marker
          coordinate={{
            latitude: 4.931396,
            longitude: 8.329544
          }}
          title="Gate"
          description="Gate"

        />
        <Marker
          coordinate={{
            latitude: 4.931086,
            longitude: 8.331908
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
            latitude: 4.926998,
            longitude: 8.331482,
          }}
          title="Basketball Court"
          description="Court"

        />

        <Marker
          coordinate={{
            latitude: 4.928152,
            longitude: 8.329298
          }}
          title="Man 'O' War pitch"
          description="Field"

        />

        <Marker
          coordinate={{
            latitude: 4.926892,
            longitude: 8.328879
          }}
          title="Football Field"
          description="Field"

        />

        <Marker
          coordinate={{
            latitude: 4.925201,
            longitude: 8.328299
          }}
          title="New  Science  Block 2"
          description="LECTURE HALL"

        />

        <Marker
          coordinate={{
            latitude: 4.924985,
            longitude: 8.330204
          }}
          title="Crutech Male Hostel"
          description="HOSTEL"

        />


        <Marker
          coordinate={{
            latitude: 4.926235,
            longitude: 8.329086
          }}
          title="Prefab 1,2,3,4"
          description="LECTURE HALL"

        />

        <Marker
          coordinate={{
            latitude: 4.926153,
            longitude: 8.330606
          }}
          title="New Education Block"
          description="LECTURE HALL"

        />
        <Marker
          coordinate={{
            latitude: 4.926356,
            longitude: 8.332150
          }}
          title="Clinic"
          description="Clinic"

        />

        <Marker
          coordinate={{
            latitude: 4.926408,
            longitude: 8.328723
          }}
          title="ETF 1 AND 2"
          description="LECTURE HALL"

        />

        <Marker
          coordinate={{
            latitude: 4.926290,
            longitude: 8.329813
          }}
          title="Urban and Regional Planning"
          description="Department"

        />


        <Marker
          coordinate={{
            latitude: 4.929186,
            longitude: 8.329903
          }}
          title="Old Engineering block"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.929200,
            longitude: 8.330114,
          }}
          title="Engineering Old Faculty And Dean's Office"
          description="Faculty"

        />



        <Marker
          coordinate={{
            latitude: 4.926686,
            longitude: 8.329919
          }}
          title="Mass Communication"
          description="Department"

        />

        <Marker
          coordinate={{
            latitude: 4.926487,
            longitude: 8.330596
          }}
          title="Post Graduate School"
          description="Post Graduate"

        />
        <Marker
          coordinate={{
            latitude: 4.927586,
            longitude: 8.330290,
          }}
          title="CBT Center"
          description="JAMB Center"

        />

        <Marker
          coordinate={{
            latitude: 4.927991,
            longitude: 8.3320062,
          }}
          title="Old Computer Science Block"
          description="Old Computer Science"

        />
        <Marker
          coordinate={{
            latitude: 4.927790,
            longitude: 8.330396,
          }}
          title="Heritage Bank"
          description="Bank"

        />

        <Marker
          coordinate={{
            latitude: 4.927960,
            longitude: 8.330721,
          }}
          title="Faculty of Architecture"
          description="Faculty of Architecture"

        />

        <Marker
          coordinate={{
            latitude: 4.928037,
            longitude: 8.332265,
          }}
          title="Hall 3 Crutech"
          description="FEMALE HOSTEL"

        />


        <Marker
          coordinate={{
            latitude: 4.927555,
            longitude: 8.332621,
          }}
          title="Visual Arts Department"
          description="Department"

        />

        <Marker
          coordinate={{
            latitude: 4.928057,
            longitude: 8.329801,
          }}
          title="Department of mathematics and statistic"
          description="Department"

        />




        <Marker
          coordinate={{
            latitude: 4.928724,
            longitude: 8.332361,
          }}
          title="Hall 2 Crutech"
          description="FEMALE HOSTEL"

        />

        <Marker
          coordinate={{
            latitude: 4.929464,
            longitude: 8.332542,
          }}
          title="Hall 1 Crutech"
          description="FEMALE HOSTEL"

        />

        <Marker
          coordinate={{
            latitude: 4.928561,
            longitude: 8.331865,
          }}
          title="Crutech SUG Solemn Assembly / New CAF"
          description="Solemn Assembly"

        />

        <Marker
          coordinate={{
            latitude: 4.929000,
            longitude: 8.330095,
          }}
          title="General Store"
          description="General Store"

        />

        <Marker
          coordinate={{
            latitude: 4.928024,
            longitude: 8.328552,
          }}
          title="Wood Production"
          description="Workshop"

        />



        <Marker
          coordinate={{
            latitude: 4.929482,
            longitude: 8.329989,
          }}
          title="Faculty of Physical Science"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.928883,
            longitude: 8.328891,
          }}
          title="ELECTRICAL ENGINEERING"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.927849,
            longitude: 8.328477,
          }}
          title="CIVIL ENGINEERING WORKSHOP"
          description="Faculty"

        />
        <Marker
          coordinate={{
            latitude: 4.926459,
            longitude: 8.330803,
          }}
          title="Faculty of Education"
          description="Faculty"

        />

        <Marker
          coordinate={{
            latitude: 4.927150,
            longitude: 8.328174,
          }}
          title="Mama G Restaurant"
          description="Restaurant"

        />

        <Marker
          coordinate={{
            latitude: 4.930101,
            longitude: 8.330153,
          }}
          title="MIS"
          description="MIS"

        />

        <Marker
          coordinate={{
            latitude: 4.929765,
            longitude: 8.330394,
          }}
          title="Library"
          description="Library"

        />

        <Marker
          coordinate={{
            latitude: 4.925828,
            longitude: 8.325901,
          }}
          title="Department of Works"
          description="Department of Works"

        />
        <Marker
          coordinate={{
            latitude: 4.926510,
            longitude: 8.328000,
          }}
          title="Soil Mechanic Laboratory"
          description="Laboratory"

        />
        <Marker
          coordinate={{
            latitude: 4.926783,
            longitude: 8.328106,
          }}
          title="Strenght of material Labratory"
          description="Labratory"

        />

        <Marker
          coordinate={{
            latitude: 4.930943,
            longitude: 8.329943,
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