/**
 * Created by bellson on 17-3-21.
 */

import React from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native'


export default class extends React.Component{

  render(){
    const {pm25,pm10,temperature} = this.props
    return (
      <View style={{flex:1}}>
        {/*<Image source={require('../source/img/logo_og.png')} style={{width:400,height:200}} />*/}
        <Image
          source={{uri: 'http://www.wallpapers-web.com/data/out/95/4575798-grey-for-iphone-6-wallpapers.jpg'}}
          style={{flex:1,}}
        >
          <Text style={[styles.whiteText, styles.mainTitle]}>Perfect Night</Text>
          <Text style={[styles.whiteText, styles.cityName]}>Gui Yang</Text>
          <Text style={[styles.whiteText, styles.mainTemp]}>{temperature}℃</Text>
          <Image
            source={{uri: 'http://slodive.com/wp-content/uploads/2011/05/white-backgrounds/white-background.jpg'}}
            style={styles.imgContainer}
          >
            <View style={styles.weatherDetails}>
              <Text style={[styles.everyItem, styles.bold, styles.flex2]}>
                Humidity
              </Text>
              <Text style={[styles.everyItem, styles.bold, styles.flex1]}>

              </Text>
              <Text style={[styles.everyItem, styles.bold, styles.flex1]}>
                86
              </Text>
              <Text style={[styles.everyItem, styles.bold, styles.flex1]}>
                <Image
                  source={{uri:'http://icons.iconarchive.com/icons/custom-icon-design/lovely-weather-2/256/Humidity-icon.png'}}
                  style={styles.itemIcon}
                />
              </Text>
            </View>
            <View style={styles.weatherDetails}>
              <Text style={[styles.everyItem, styles.flex2]}>
                pm2.5
              </Text>
              <Text style={[styles.everyItem, styles.flex1]}>

              </Text>
              <Text style={[styles.everyItem, styles.flex1]}>
                {pm25}
              </Text>
              <Text style={[styles.everyItem, styles.bold, styles.flex1]}>
                <Image
                  source={{uri:'http://pic.cr173.com/up/2016-8/201689943277501.png'}}
                  style={styles.itemIcon}
                />
              </Text>
            </View>
            <View style={styles.weatherDetails}>
              <Text style={[styles.everyItem, styles.flex2]}>
                pm10
              </Text>
              <Text style={[styles.everyItem, styles.flex1]}>

              </Text>
              <Text style={[styles.everyItem, styles.flex1]}>
                {pm10}
              </Text>
              <Text style={[styles.everyItem, styles.bold, styles.flex1]}>
                <Image
                  source={{uri:'https://cdn.tenforums.com/geek/gars/images/2/types/thumb_Cortana.png'}}
                  style={styles.itemIcon}
                />
              </Text>
            </View>
            <View style={styles.weatherDetails}>
              <Text style={[styles.everyItem, styles.flex2]}>

              </Text>
              <Text style={[styles.everyItem, styles.flex1]}>

              </Text>
              <Text style={[styles.everyItem, styles.flex1]}>

              </Text>
              <Text style={[styles.everyItem, styles.bold, styles.flex1, styles.opacityText]}>
                more...
              </Text>
            </View>
          </Image>
        </Image>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  whiteText: {
    alignSelf:'center',
    color:'white',
  },
  mainTitle: {
    fontSize: 35,
    fontFamily: 'Book Antiqua',
    fontWeight:'bold',
    marginTop: 100,
  },
  cityName: {
    marginTop: 5,
    fontSize: 25,
    fontFamily: 'Arial',
  },
  mainTemp: {
    fontSize: 85,
    fontFamily: 'Times New Roman',
  },
  imgContainer: {
    marginTop: 90,
    height: 380,
    padding: 20,
  },
  weatherDetails: {
    marginTop: 25,
    // borderWidth: 1,
    // borderColor: 'red',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  everyItem: {
    // borderWidth: 1,
    // borderColor: 'blue',
    color: '#434343',
    fontSize: 24,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  itemIcon: {
    width: 120,
    height: 120,
    opacity: .5,
  },
  opacityText: {
    opacity: .8,
    fontSize: 20,
    textAlign: 'left',
    position: 'relative',
    top: -10,
    right: -20,
  }
});









