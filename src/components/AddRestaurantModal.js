import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

export default (props) => {
  const { visible, testID, onSave } = props;
  const [inputValue, setInputValue] = useState('');

  const changeTextHandler = (textInput) => {
    setInputValue(textInput);
  };

  const onPressHandler = () => {
    onSave(inputValue);
    setInputValue('');
  };

  if (!visible) {
    return null;
  }

  return (
    <View testID={testID} style={{ width: '50%' }}>
      <TextInput
        style={{ borderWidth: 1 }}
        testID={'inputRestaurant'}
        onChangeText={changeTextHandler}
        value={inputValue}
      />
      <Button
        testID={'saveRestaurant'}
        title={'Save Restaurant'}
        onPress={onPressHandler}
      />
    </View>
  );
};
