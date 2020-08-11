import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {render as rtlRender} from '@testing-library/react'
import App from './App';

const initialReducerState = {
  messages: [],
}

const reducer = state => state;

function render(
  ui,
  {
    initialState = initialReducerState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {},
) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

test('renders Say component', () => {
  const { getByText, getByTestId } = render(<App />);
  const inputElement = getByTestId('say-input');
  expect(inputElement).toBeInTheDocument();

  const buttonElement = getByText(/Send/i);
  expect(buttonElement).toBeInTheDocument();
});
