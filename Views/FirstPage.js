
import React, {useState} from 'react';
import {
SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const FirstPage = ({navigation}) => {
  const [userName, setUserName] = useState('Ahmed');
  const [major, setMajor] = useState('IS');
  const [email, setEmail] = useState('Ahmed@gmail.com');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          User Information
        </Text>
        <Text style={styles.textStyle}>
          Please enter your information
        </Text>
        {/*Input to get the value from the user*/}
        <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Enter your name'}
          style={styles.inputStyle}
        />
        <TextInput
          value={major}
          onChangeText={(major) => setMajor(major)}
          placeholder={'Enter your major'}
          style={styles.inputStyle}
        />
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder={'Enter your email'}
          style={styles.inputStyle}
        />
        {/* On click of the button we will send the data as a Json
          From here to the Second Screen using navigation */}
        <TouchableOpacity
         style={styles.btnStyle}
         onPress={() =>
          navigation.navigate('SecondPage', {
            firstNameKey: userName,
            majorKey: major,
            emailKey: email,

          })
        }     
           >
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
   
      </View>
    
    </SafeAreaView>
  );
};

export default FirstPage;

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
    
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
  btnStyle: {
    width: '80%',
    height: 55,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 16,

  },
  btnText: {
    color:'#fff',
    textAlign: 'center',
  },
});

