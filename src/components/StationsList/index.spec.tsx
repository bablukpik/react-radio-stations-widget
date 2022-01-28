import { FC } from 'react';
import { render } from '@testing-library/react';
import { initialState } from 'src/reducers/stationsReducer';

import StationsList from './index';
import store from 'src/store';
import { Provider } from 'react-redux';

const Wrapper: FC = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

describe('StationsList', () => {
  it('should render', () => {
    const { asFragment } = render(<StationsList state={initialState}/>, { wrapper: Wrapper });
    expect(asFragment()).toMatchSnapshot();
  });
});
