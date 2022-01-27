import { FC } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from 'src/store';

import Main from './index';

const Wrapper: FC = ({ children }) => (
    <Provider store={store}>
      {children}
    </Provider>
  );
  
describe('Main', () => {
  it('should render', () => {
    const { asFragment } = render(<Main />, { wrapper: Wrapper });
    expect(asFragment()).toMatchSnapshot();
  });
});
