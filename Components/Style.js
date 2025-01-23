import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensures the container takes up the entire screen
        //justifyContent: 'center', // Centers content vertically
        alignItems: 'center',
        
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center',
        margin:20,
        marginTop:30
    },
    box:{
        width:290,
        height:50,
        fontSize:18,
        borderRadius:15,
        borderWidth:2,
        margin:15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white'
    },
    icon: {
        marginLeft: 10,
    },
    inputbox:{
        fontSize:18,
        marginLeft:3
    },
    gradient:{
        height:550,
        marginTop:60,
        margin:20,
        borderRadius:15,
        elevation:5
    },
    buttonText: {
        padding: 10,
        borderRadius: 15,
        width:280,
        height:50,
        marginTop:20,
        justifyContent:'center',
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        justifyContent:'center',
        backgroundColor:'#800070'
      },
})
export default styles;