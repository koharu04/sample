import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SignUp = () => {
  const [title, setTitle] = useState('');

  const getUser = () => {
    const resp = axios
      .get('http://192.168.100.70:3000/user')
      .then(function (response) {
        console.log(response.data);
        setTitle(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log('tdt');
        console.log(error);
      });
  };

  getUser();

  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image
        // style={styles.logoStyle}
        //source={require('../assets/images/Logo.png')}
        />
      </View>
      <ScrollView style={styles.bottomView}>
        <Text style={styles.headingStyle}>Sign Up{'\n'}</Text>
        <Text>{title}</Text>

        <View style={styles.formStyle}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor={'#fff'}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Email Address"
            Z
            placeholderTextColor={'#fff'}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor={'#fff'}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={'#fff'}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={'#fff'}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.buttonSignUp}>
            <Text style={styles.buttonStyle}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '80%',
    backgroundColor: '#43d9c0',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  logoStyle: {
    width: '40%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  headingStyle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 45,
    marginLeft: 30,
    marginTop: 30,
  },
  formStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    height: 52,
    borderRadius: 10,
    color: '#fff',
    marginTop: 20,
  },
  buttonSignUp: {
    width: '90%',
    height: 52,
    color: '#fff',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  signupStyle: {
    color: 'gray',
  },
  textButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default SignUp;
