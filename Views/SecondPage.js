
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const SecondPage = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
        Your Information Saved Successfully
        </Text>
        <Text style={styles.textStyle}>
        Name: {route.params.firstNameKey}
        </Text>
        <Text style={styles.textStyle}>
        Major: {route.params.majorKey}
        </Text>
        <Text style={styles.textStyle}>
        Email: {route.params.emailKey}
        </Text>
      </View>
    
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,

  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    marginTop:18,
    

  },
});