import axios from 'axios';
import { useCallback, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import WeatherCity from './components/WeatherCity';
import WeatherData from './components/WeatherData';

const Weather = () => {


    const [textInput, setTextInput] = useState("");
    const [data, setData] = useState({
        weather: [{ description: "default" }]
    });


    const weatherFetchHandler = useCallback(() => {
        axios({
            method: 'GET',
            url: `http://api.openweathermap.org/data/2.5//weather?q=${textInput}&units=metric&appid=${"apikeyhere"}`,
        }).then((res) => {
            setData(res.data);
        }).catch((error) => {
            alert(error.message);
        });
    }, [textInput])

    return (
        <View style={{ flex: 1 }}>
            <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
            <WeatherCity setInput={setTextInput} weatherFetchHandler={weatherFetchHandler} input={textInput} />
            <WeatherData data={data} />
        </View>
    );
};
export default Weather; 
