import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Card} from 'react-native-elements';
import tempStyles from '../css/temperatureCss';
import { tempMeasurement } from '../services/quantityMeasurementBL';


const TempMeasurement = ({navigation}) => {
  const [pickerValueFrom, selectedValueFrom] = useState('');
  const [pickerValueTo, selectedValueTo] = useState('');
  const [userInput, setUserInput] = useState('');
  const [result, setOutput] = useState('');

  const calculateTemperature = (pickerValueTo) => {
          selectedValueTo(pickerValueTo);
          return tempMeasurement(userInput, pickerValueFrom, pickerValueTo);
  }

  return (
    <ScrollView style={{width: '100%', marginBottom:20}}>
      <Text style={tempStyles.heading}>Choose Type</Text>

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch'}}>

        <Card containerStyle={tempStyles.cardStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/scale-1.png')} style={tempStyles.cardImg}/>
            <Text numberOfLines={1} style={tempStyles.cardText}>Length</Text>
          </TouchableOpacity>
        </Card>
        
        <Card containerStyle={tempStyles.temperatureCard}>
          <TouchableOpacity>
            <Image source={require('../assets/hot.png')} style={tempStyles.cardImg}/>
            <Text numberOfLines={1} style={tempStyles.cardText}>Temperature</Text>
          </TouchableOpacity>
        </Card>

        <Card containerStyle={tempStyles.cardStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Volume')}>
            <Image source={require('../assets/beaker-1.png')} style={tempStyles.cardImg} />
            <Text numberOfLines={1} style={tempStyles.cardText}>Volume</Text>
          </TouchableOpacity>
        </Card>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'stretch', width:'90%', alignSelf:'center' }}>

        <Card containerStyle={{borderRadius:7, borderWidth: 1, width:'50%'}}>
          <Text>From: {pickerValueFrom}</Text>
          <TextInput style={tempStyles.input} placeholder="From" keyboardType="numeric" onChangeText={userInput => setUserInput(userInput)}/>

          <Picker style= {tempStyles.picker} onValueChange={(itemValue) => selectedValueFrom(itemValue)} selectedValue={pickerValueFrom}>

              <Picker.Item label="&#8451;" value="celsius" />
              <Picker.Item label="&#8457;" value="fahrenheit" />
              <Picker.Item label="&#xb0;K" value="kelvin" />

          </Picker>

        </Card>

        <Card containerStyle={{borderRadius:7, borderWidth: 1, width:'50%'}}>
          <Text>To: {pickerValueTo}</Text>
          <Text style={tempStyles.input} >{result}</Text>

          <Picker style= {tempStyles.picker} onValueChange={itemValue => {let output = calculateTemperature(itemValue); console.log(output); setOutput(output)}} selectedValue = {pickerValueTo}>
            
              <Picker.Item label="&#8451;" value="celsius"/>
              <Picker.Item label="&#8457;" value="fahrenheit"/>
              <Picker.Item label="&#xb0;K" value="kelvin" />
          </Picker>
        
        </Card>
      </View>
    </ScrollView>
  );
};

export default TempMeasurement;
