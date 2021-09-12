import {StyleSheet} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

const volumeStyles = StyleSheet.create({
  heading: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    padding: 10,
  },

  cardStyle: {
    borderRadius: 7,
    borderWidth: 1,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  cardImg: {
    resizeMode:'contain',
    alignSelf:'center'
  },

  cardText: {
    marginTop: 10, 
    fontSize:15,
    fontFamily: 'Montserrat-Regular', 
    // width:'100%'
  },

  volumeCard: {
    borderRadius: 7,
    borderWidth: 1,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#7224FF',
    backgroundColor: '#E8DDFF' 
  },
  
  input: {
    borderColor:'#a9a9a9',
    height: 40,
    marginTop: 10,
    borderBottomWidth: 1,
    borderRadius:7,
    padding: 10,
  },

  picker:{
    height: 40,
    marginVertical: 10,
    borderWidth: 5,
    borderRadius:7,
  }
});

export default volumeStyles;
