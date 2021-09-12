import React from 'react';
import { render } from '@testing-library/react-native';
import App from '@src/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<App />);
  });

  it('should be rendered correctly', () => {
    expect(wrapper).toBeTruthy();
  });

  it.each(['Step One', 'See Your Changes', 'Debug', 'Learn More'])(
    "should show section '%s'",
    (sectionTitle) => {
      expect(wrapper.getByText(sectionTitle)).toBeTruthy();
    }
  );

  it('should show screen header component', function () {
    expect(wrapper.getByTestId('screen-header')).toBeTruthy();
  });

  it('should show button "btn-click-me"', function () {
    expect(wrapper.getByTestId('btn-click-me')).toBeTruthy();
  });
});
