import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const container = render(<App />);
  const getByText = container.getAllByText;

  getByText(/strike/i);
  getByText(/balls/i);
});
