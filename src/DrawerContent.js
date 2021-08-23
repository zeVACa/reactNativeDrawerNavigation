import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer, Text} from 'react-native-paper';

export const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      {/* <Text>Drawer contentttttttttttttt</Text> */}
      <DrawerContentScrollView {...props}>
        <View>
          <Text>first</Text>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item label="Сменить аккаунт" onPress={() => {}} />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomDrawerSection: {
    backgroundColor: '#e5e5e5',
    paddingBottom: 0
  },
});
