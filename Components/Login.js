import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Style';
const Login = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
    <View style={styles.box}>
      <Icon name="email" size={20} color="#888" style={styles.icon}/>
      <TextInput placeholder="Enter Email" placeholderTextColor="#888" keyboardType="email-address" />
    </View>
    <View style={styles.box}>
      <Icon name="lock" size={20} color="#888" style={styles.icon}/>
      <TextInput placeholder="Enter Password" secureTextEntry={true} placeholderTextColor="#888" keyboardType="email-address" />
    </View>
    </View>
    </ScrollView>
    
  );
};

export default Login;