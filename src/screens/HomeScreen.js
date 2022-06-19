import React, {useLayoutEffect} from 'react';
import {View, FlatList, Text, TextInput, TouchableOpacity, RefreshControl} from 'react-native';
import Card from '../components/Card';

const HomeScreen = ({navigation}) => {
  
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <View
          style={{
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor={'orange'}
            style={{
              height: '70%',
              width: '80%',
              backgroundColor: '#DFDFDF',
              fontSize: 12,
              paddingLeft: 10,
              borderRadius: 5,
              color: 'orange',
              fontWeight: 'bold',
            }}
          />
          <View style={{width: '20%', height: '70%',}}>
            <TouchableOpacity 
              style={{
                backgroundColor: 'orange', 
                width: 50, height: '100%', 
                borderRadius: 5, 
                alignSelf: 'flex-end', 
                justifyContent: 'center'}}
            >
              <Text style={{alignSelf: 'center'}}>Sort</Text>
            </TouchableOpacity>
          </View>
        </View>
      ),
    });
  }, [navigation]);

    const [refreshing, setRefreshing] = React.useState(false);

    const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

  const renderItem = ({item}) => (
    <Card
      name={item.name}
      location={item.location}
      price={item.price}
      onPress={() => navigation.navigate('DetailScreen')}
    />
  );

  const mockData = [
    {
      id: '1',
      name: 'Kos Ronaria',
      location: 'Kupang',
      price: 600000
    },
    {
      id: '2',
      name: 'Kos Indah',
      location: 'Jakarta',
      price: 800000
    },
    {
      id: '3',
      name: 'Kos Ronaria',
      location: 'Kupang',
      price: 600000
    },
    {
      id: '4',
      name: 'Kos Ronaria',
      location: 'Kupang',
      price: 600000
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 10,
      }}>
      <FlatList
        style={{paddingHorizontal: 20}}
        data={mockData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
