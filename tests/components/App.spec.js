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
});
