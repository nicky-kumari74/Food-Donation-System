import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, Text, TextInput, View ,StyleSheet,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient'
const Register = ({navigation}) => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cnfpassword,setConfpassword]=useState("");
  return (
    <ScrollView style={{backgroundColor:'#800070'}}>
      <LinearGradient colors={['#ffe5ce','#cd72de','#89fffd']} style={styles.gradient}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#800070" barStyle="light-content" />
      <Text style={styles.text}>Register</Text>
      <View style={styles.box}>
      <Icon name="person" size={20} color="black" style={styles.icon}/>
      <TextInput placeholder="Enter Name" style={styles.inputbox} value={name} onChangeText={(text)=>setName(text)} placeholderTextColor="black" keyboardType="email-address" />
    </View>
    <View style={styles.box}>
      <Icon name="email" size={20} color="black" style={styles.icon}/>
      <TextInput placeholder="Enter Email" style={styles.inputbox} value={email} onChangeText={(text)=>setEmail(text)} placeholderTextColor="black" keyboardType="email-address" />
    </View>
    <View style={styles.box}>
      <Icon name="lock" size={20} color="black" style={styles.icon}/>
      <TextInput placeholder="Enter Password" style={styles.inputbox} value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry={true} placeholderTextColor="black" keyboardType="email-address" />
    </View>
    <View style={styles.box}>
      <Icon name="lock" size={20} color="black" style={styles.icon}/>
      <TextInput placeholder="Enter Re-password" style={styles.inputbox} value={cnfpassword} onChangeText={(text)=>setConfpassword(text)} secureTextEntry={true} placeholderTextColor="black" keyboardType="email-address" />
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        
          <Text style={styles.buttonText}>Click Me</Text>
        
      </TouchableOpacity>
      
    </View>
    </LinearGradient>
    </ScrollView>
    
  );
};

export default Register;