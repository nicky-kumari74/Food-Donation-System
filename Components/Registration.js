import React, { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Style';
const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cnfpassword,setConfpassword]=useState("");
  return (
    <ScrollView>
        <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      
      <View style={styles.box}>
      <Icon name="person" size={20} color="#888" style={styles.icon}/>
      <TextInput placeholder="Enter Name" style={styles.inputbox} value={name} onChangeText={(text)=>setName(text)} placeholderTextColor="#888" keyboardType="email-address" />
    </View>
    <View style={styles.box}>
      <Icon name="email" size={20} color="#888" style={styles.icon}/>
      <TextInput placeholder="Enter Email" style={styles.inputbox} value={email} onChangeText={(text)=>setEmail(text)} placeholderTextColor="#888" keyboardType="email-address" />
    </View>
    <View style={styles.box}>
      <Icon name="lock" size={20} color="#888" style={styles.icon}/>
      <TextInput placeholder="Enter Password" style={styles.inputbox} value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry={true} placeholderTextColor="#888" keyboardType="email-address" />
    </View>
    <View style={styles.box}>
      <Icon name="lock" size={20} color="#888" style={styles.icon}/>
      <TextInput placeholder="Enter Re-password" style={styles.inputbox} value={cnfpassword} onChangeText={(text)=>setConfpassword(text)} secureTextEntry={true} placeholderTextColor="#888" keyboardType="email-address" />
    </View>
    </View>
    </ScrollView>
    
  );
};

export default Register;