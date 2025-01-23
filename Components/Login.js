import React, { useState }  from 'react';
import { ScrollView, Text, TextInput, View ,TouchableOpacity,StyleSheet,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient'
const Login = ({navigation}) => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  return (
    <ScrollView style={{backgroundColor:'#800070'}}>
      <LinearGradient colors={['#ffe5ce','#cd72de','#89fffd']} style={styles.gradient}>
      <View style={styles.container}>
      <StatusBar backgroundColor="#800070" barStyle="light-content" />
      <Text style={styles.text}>Login</Text>
    <View style={styles.box}>
      <Icon name="email" size={20} color="black" style={styles.icon}/>
      <TextInput placeholder="Enter Email" placeholderTextColor="black" value={email} onChangeText={(text)=>setEmail(text)} keyboardType="email-address" />
    </View>
    <View style={styles.box}>
      <Icon name="lock" size={20} color="black" style={styles.icon}/>
      <TextInput placeholder="Enter Password" secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)} placeholderTextColor="black" keyboardType="email-address" />
    </View>
    <Text style={{fontSize:18,color:'black',marginLeft:150,fontWeight:'bold'}}>forgot password?</Text>
    <TouchableOpacity onPress={() => alert('Button Pressed!')}>
        
          <Text style={styles.buttonText}>Click Me</Text>
        
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:20,color:'black',marginTop:40}}>If new user?</Text>
      <Text style={{fontSize:20,color:'white',marginTop:40,margin:10}} onPress={() => navigation.navigate('Register')}>create Account</Text>
      </View>
    </View>
    </LinearGradient>
    </ScrollView>
    
  );
};

export default Login;