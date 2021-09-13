import React, { useState } from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import AddRestaurantModal from './AddRestaurantModal';

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [listRestaurants, setListRestaurants] = useState([]);

  const onPressHandler = () => {
    setIsModalVisible(true);
  };

  const onSaveHandler = (textInput) => {
    setListRestaurants((latestList) => [textInput, ...latestList]);
  };

  const renderListItem = ({ item }) => {
    return <Text testID={'restaurantItem'}>{item}</Text>;
  };

  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
      <Button
        testID={'addRestaurant'}
        title={'New Restaurant'}
        onPress={onPressHandler}
      />
      <AddRestaurantModal
        testID={'addRestaurantModal'}
        visible={isModalVisible}
        onSave={onSaveHandler}
      />
      <FlatList
        testID={'listRestaurant'}
        data={listRestaurants}
        renderItem={renderListItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};
