/**
 * Created by bellson on 17-3-23.
 */
import {Client, Message} from 'react-native-paho-mqtt'

export default {
  namespace:'weather',

  state: {
    pm25: '-',
    pm10: '-',
    temperature: '-',
  },

  subscriptions: {
    connect({dispatch}) {

      const myStorage = {
        setItem: (key, item) => {
          myStorage[key] = item;
        },
        getItem:(key) => myStorage[key],
        removeItem: (key) => {
          delete myStorage[key];
        },
      };

      const client = new Client({
        uri: 'ws://mqtt.firy.cn:15880/',
        clientId: String(Math.random()),
        storage: myStorage
      });

      client.on('messageReceived', (message) => {
        const data = JSON.parse(message.payloadString)

        if(data.type == 'dust'){
          const {pm25_cf:pm25, pm10_cf:pm10,} = data.value
          dispatch({type:'setValue', payload: {pm25,pm10}})
        }else if(data.type == 'air'){
          const {temperature} = data.value
          dispatch({type:'setValue', payload: {temperature: parseFloat(temperature).toFixed(0)}})
        }
      })

      client.connect()
        .then(() => {
          return client.subscribe('devices/whkj01/data');
        })
        .catch((responseObject) => {
          if (responseObject.errorCode !== 0) {
            console.log('onConnectionLost:' + responseObject.errorMessage);
          }
        })
    }
  },

  reducers: {
    // setDust(state, {payload}){
    //   return {...state, pm25: payload.pm25, pm10: payload.pm10 }
    // },
    // setAir(state, {payload}){
    //   return {...state, temperature: payload.temperature}
    // },
    setValue(state, {payload}){
      return {...state, ...payload}
    },
  }

}