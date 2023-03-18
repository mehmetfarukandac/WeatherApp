import { TextInput } from "react-native";

const WeatherCity = ({ setInput, weatherFetchHandler, input }) => {
    return (
        <TextInput
            onChangeText={text => setInput(text)}
            placeholder='Write city'
            placeholderTextColor={'#000'}
            onSubmitEditing={weatherFetchHandler}
            value={input}
            style={{
                borderBottomColor: 'red',
                backgroundColor: '#fff',
                paddingVertical: 20,
                marginHorizontal: 10,
                fontSize: 45,
                textAlign: 'center',
                borderBottomWidth: 8,
                borderRightWidth:8,
                marginVertical: 20,
            }}
        />
    );
};
export default WeatherCity;
