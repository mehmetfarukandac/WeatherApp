import { View, Text, TextInput } from 'react-native';
import { ImageBackground } from 'react-native';
const WeatherData = ({ data }) => {
    const description = data?.weather[0]?.description

    return (
        <ImageBackground
            source={
                description == "scattered clouds" ? require('../../../assets/scattered-clouds.jpg') :
                    description == "broken clouds" ? require('../../../assets/broken-clouds.jpg') :
                        description.includes("rain") ? require('../../../assets/shower-rain.jpg') :
                            description == "overcast clouds" ? require('../../../assets/overcast-clouds.jpg') :
                                description == "clear sky" ? require('../../../assets/clear-sky.jpg') :
                                description == "few clouds" ? require('../../../assets/few-clouds.jpg') :
                                    description.includes("snow") ? require('../../../assets/light-snow.jpg') :
                                        description.includes("mist") ? require('../../../assets/mist.jpg') :
                                            require("../../../assets/default.jpg")
            }
            resizeMode='cover'
            style={{
                flex: 1,
                flexDirection: "column",
                borderRadius: 16
            }}
        >
            {
                data?.weather[0]?.description !== "default" && <View style={{
                    borderBottomColor: 'orange',
                    marginVertical: 20,
                    backgroundColor: '#fff',
                    paddingVertical: 20,
                    marginHorizontal: 10,
                    padding: 5,
                    borderBottomWidth: 8,
                    borderRightWidth: 8,
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: '#000',
                        fontSize: 35,
                        fontWeight: 'bold'
                    }}>
                        {`${data?.name} ${data?.sys?.country}`}
                    </Text>
                    <Text style={{
                        color: '#000',
                        fontSize: 22,
                        marginVertical: 10
                    }}>{new Date().toLocaleString()}</Text>
                    <Text style={{
                        fontSize: 45,
                        color: '#000',
                        marginVertical: 10
                    }}>{`${Math.round(data?.main?.temp)}, ℃`}</Text>
                    <Text style={{
                        fontSize: 22,
                        color: '#000',
                        marginVertical: 10,
                        fontWeight: '500'
                    }}>{`Min: ${Math.round(data?.main?.temp_min)} ℃ / Max: ${Math.round(data?.main?.temp_max)} ℃`}</Text>
                </View>
            }
        </ImageBackground>
    );
};
export default WeatherData;
