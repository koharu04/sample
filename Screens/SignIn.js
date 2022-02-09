import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import '../assets/images/Logo.png';

const SignIn = ({navigation}) => {
  function navigate() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <Image
        // style={styles.logoStyle}
        //source={require('../assets/images/Logo.png')}
        />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.headingStyle}>
          Welcome{'\n'}
          Back
        </Text>

        <View style={styles.formStyle}>
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={'#000'}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={'#000'}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.buttonSignIn}>
            <Text style={styles.buttonStyle} onPress={navigate}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.textButton} onPress={navigate}>
          <Text>
            Don't have an account? {''}
            <Text style={styles.signupStyle}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
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
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '70%',
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
    marginTop: 20,
  },
  textInput: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#000',
    height: 52,
    borderRadius: 10,
    color: '#000',
    marginTop: 20,
  },
  buttonSignIn: {
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
    marginTop: 40,
  },
});

export default SignIn;
