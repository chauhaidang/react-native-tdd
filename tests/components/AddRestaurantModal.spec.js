import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AddRestaurantModal from '@src/components/AddRestaurantModal';

describe('AddRestaurantModal component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<AddRestaurantModal />);
  });

  it('should render correctly', function () {
    expect(wrapper).toBeTruthy();
  });

  it('should call onSaveHandler after pressing button save restaurant', function () {
    const mockOnSave = jest.fn();
    const textChange = 'ABC';
    wrapper = render(<AddRestaurantModal onSave={mockOnSave} visible={true} />);

    fireEvent.changeText(wrapper.getByTestId('inputRestaurant'), textChange);
    fireEvent.press(wrapper.getByTestId('saveRestaurant'));

    expect(mockOnSave).toHaveBeenCalledWith(textChange);
  });

  it('should update value of input after onChangeText get called', function () {
    const textChange = 'ABC';
    wrapper = render(<AddRestaurantModal visible={true} />);
    const input = wrapper.getByTestId('inputRestaurant');

    fireEvent.changeText(input, textChange);

    expect(input.props.value).toEqual(textChange);
  });
});
