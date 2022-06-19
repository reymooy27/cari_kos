import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

const Card = ({name, price, location, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View
        style={{
          width: '100%',
          height: 300,
          marginBottom: 10,
          borderRadius: 15,
          backgroundColor: '#DFDFDF',
        }}>
        <Image
          style={{
            width: '100%',
            height: '70%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          source={{
            uri: 'https://jakartaforrent.com/wp-content/uploads/2022/05/1-ink-2-600x400.jpeg',
          }}
        />

        <TouchableOpacity
          style={{top: 0, right: 0, position: 'absolute', padding: 7}}>
          <Text>Love</Text>
        </TouchableOpacity>

        <View style={{paddingLeft: 15, paddingTop: 5, height: '40%'}}>
          <Text style={{fontSize: 20, marginBottom: 3, fontWeight: 'bold'}}>
            {name}
          </Text>
          <Text style={{fontSize: 14, marginBottom: 3}}>{location}</Text>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 3,
              fontWeight: 'bold',
            }}>{`${price} / per bulan`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
