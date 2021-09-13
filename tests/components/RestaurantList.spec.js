import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import RestaurantList from '@src/components/RestaurantList';

describe('RestaurantList component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<RestaurantList />);
  });

  it('should be rendered correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render button add restaurant', function () {
    expect(wrapper.getByTestId('addRestaurant')).toBeTruthy();
  });

  it('should NOT render add restaurant modal', function () {
    expect(wrapper.queryByTestId('addRestaurantModal')).toBeFalsy();
  });

  it('should render add restaurant modal after button add restaurant is pressed', function () {
    const btnAddRestaurant = wrapper.getByTestId('addRestaurant');
    fireEvent.press(btnAddRestaurant);
    expect(wrapper.getByTestId('addRestaurantModal')).toBeTruthy();
  });

  it('should render list restaurant component', function () {
    expect(wrapper.getByTestId('listRestaurant')).toBeTruthy();
  });

  it("should render restaurant items after child component's onPress fired multiple times", function () {
    const listRestaurants = ['ABC', 'CDF'];

    for (const restaurant of listRestaurants) {
      fireEvent.press(wrapper.getByTestId('addRestaurant'));
      fireEvent.changeText(wrapper.getByTestId('inputRestaurant'), restaurant);
      fireEvent.press(wrapper.getByTestId('saveRestaurant'));
    }

    expect(wrapper.getAllByTestId('restaurantItem')).toHaveLength(2);
    expect(wrapper.getByText(listRestaurants[1])).toBeTruthy();
    expect(wrapper.getByText(listRestaurants[0])).toBeTruthy();
  });

  it("should update child component's input to empty after button 'saveRestaurant' is pressed", function () {
    const textChange = 'ABC';
    fireEvent.press(wrapper.getByTestId('addRestaurant'));
    const input = wrapper.getByTestId('inputRestaurant');

    fireEvent.changeText(input, textChange);
    fireEvent.press(wrapper.getByTestId('saveRestaurant'));

    expect(wrapper.queryByTestId('inputRestaurant')).toBeFalsy();
  });
});
