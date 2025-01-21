import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensures the container takes up the entire screen
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center',
        
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center',
        margin:20,
        marginTop:90
    },
    box:{
        width:300,
        height:50,
        fontSize:18,
        borderRadius:15,
        borderWidth:2,
        margin:15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10,
    },
    inputbox:{
        fontSize:18
    }
})
export default styles;