import React from 'react';
import { Button, View } from 'react-native';

export default () => {
  const onPressHandler = () => {};
  return (
    <View>
      <Button
        testID={'addRestaurant'}
        title={'New Restaurant'}
        onPress={onPressHandler}
      />
    </View>
  );
};
