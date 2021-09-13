import React, {useState} from "react";
import {Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Card} from 'react-native-elements';
import lengthStyles from '../css/lengthCss';
import { measureLength } from "../services/quantityMeasurementBL";


const LengthMeasurement = ({ navigation }) => {
    const [pickerValueFrom, selectedValueFrom] = useState(pickerValueFrom);
    const [pickerValueTo, selectedValueTo] = useState(pickerValueTo);
    const [userInput, setUserInput] = useState('');
    const [result, setOutput] = useState('');

    const calculateValue = (pickerValueTo) => {
            selectedValueTo(pickerValueTo);
            return measureLength(userInput, pickerValueFrom, pickerValueTo);
            // console.log(result, userInput);
    }

    return (

    <ScrollView style={{width: '100%', marginBottom:20}}>
        <Text style={lengthStyles.heading}>Choose Type</Text>

        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch'}}>

            <Card containerStyle={lengthStyles.lengthCard}>
            <TouchableOpacity>
                <Image source={require('../assets/scale.png')} style={lengthStyles.cardImg}/>
                <Text numberOfLines={1} style={lengthStyles.cardText}>Length</Text>
            </TouchableOpacity>
            </Card>
            
            <Card containerStyle={lengthStyles.cardStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('Temperature')}>
                <Image source={require('../assets/hot-1.png')} style={lengthStyles.cardImg}/>
                <Text numberOfLines={1} style={lengthStyles.cardText}>Temperature</Text>
            </TouchableOpacity>
            </Card>

            <Card containerStyle={lengthStyles.cardStyle}>
            <TouchableOpacity onPress={() => navigation.navigate('Volume')}>
                <Image source={require('../assets/beaker-1.png')} style={lengthStyles.cardImg} />
                <Text numberOfLines={1} style={lengthStyles.cardText}>Volume</Text>
            </TouchableOpacity>
            </Card>
        </View>

        <View
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            width:'90%',
            alignSelf:'center'
            }}>
            <Card containerStyle={{borderRadius: 7, borderWidth: 1, width:'50%'}}>
            <Text>From: {pickerValueFrom}</Text>
            <TextInput
                style={lengthStyles.input}
                placeholder="From"
                keyboardType="numeric"
                onChangeText={userInput => setUserInput(userInput)}
            />

            <Picker
                style={lengthStyles.picker}
                onValueChange={itemValue => selectedValueFrom(itemValue)}
                selectedValue={pickerValueFrom}>

                <Picker.Item label="mm" value="milliMeter" />
                <Picker.Item label="cm" value="centiMeter" />
                <Picker.Item label="m" value="meter" />
                <Picker.Item label="km" value="kiloMeter" />

            </Picker>
            </Card>

            <Card containerStyle={{borderRadius: 7, borderWidth: 1, width:'50%'}}>
            <Text>To: {pickerValueTo}</Text>
            <Text style={lengthStyles.input}>{result}</Text>

            <Picker
                style={lengthStyles.picker}
                onValueChange={(itemValue) => {let output = calculateValue(itemValue); console.log(output); setOutput(output)}}
                selectedValue={pickerValueTo}>

                <Picker.Item label="mm" value="milliMeter" />
                <Picker.Item label="cm" value="centiMeter" />
                <Picker.Item label="m" value="meter" />
                <Picker.Item label="km" value="kiloMeter" />

            </Picker>
            </Card>
        </View>
    </ScrollView>
    );
}

export default LengthMeasurement;