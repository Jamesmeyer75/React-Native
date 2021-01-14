import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

const styles = StyleSheet.create({
    topOfPhone: {
        marginTop: 20 
    }
});

export default () => {
    return (
      <SafeAreaView style={styles.topOfPhone}>
        <RowItem 
          text="Themes"
          onPress={() => alert("todo!")}  
          rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem 
          text="React Native Basics"
          onPress={() => alert("todo!")}  
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />} 
        />

        <RowSeparator />

        <RowItem 
          text="React Native by Example"
          onPress={() => alert("todo!")}  
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </SafeAreaView>
    );
};