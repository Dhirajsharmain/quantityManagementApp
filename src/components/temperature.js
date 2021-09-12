import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Card} from 'react-native-elements';
import tempStyles from '../css/temperatureCss';


const TempMeasurement = ({navigation}) => {
  const [pickerValueFrom, selectedValueFrom] = useState(pickerValueFrom);
  const [pickerValueTo, selectedValueTo] = useState(pickerValueTo);

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
          <TextInput style={tempStyles.input} placeholder="From" keyboardType="numeric"/>

          <Picker style= {tempStyles.picker} onValueChange={(itemValue) => selectedValueFrom(itemValue)} selectedValue={pickerValueFrom}>

              <Picker.Item label="&#8451;" value="Celsius" />
              <Picker.Item label="&#8457;" value="Fahrenheit" />
              <Picker.Item label="&#xb0;K" value="kelvin" />

          </Picker>

        </Card>

        <Card containerStyle={{borderRadius:7, borderWidth: 1, width:'50%'}}>
          <Text>To:{pickerValueTo}</Text>
          <Text style={tempStyles.input} >Result:</Text>

          <Picker style= {tempStyles.picker} onValueChange={(itemValue) => selectedValueTo(itemValue)} selectedValue = {pickerValueTo}>
            
              <Picker.Item label="&#8451;" value="Celsius"/>
              <Picker.Item label="&#8457;" value="Fahrenheit"/>
              <Picker.Item label="&#xb0;K" value="Kelvin" />
          </Picker>
        
        </Card>
      </View>
    </ScrollView>
  );
};

export default TempMeasurement;
