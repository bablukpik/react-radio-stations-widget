import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { initialState, State } from 'src/reducers/stationsReducer';

import Footer from './index';

const getProps = (newState: State = initialState) => ({ 
    state: newState,
  });

describe('Footer', () => {
  it('should render', () => {
    const { asFragment } = render(<Footer {...getProps()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders footer text', () => {
    const newState = {
        stations: [
          {name: 'Putin FM', id: '66,6', isOpen: true},
        ],
      };

    const { getByText } = render(<Footer {...getProps(newState)}/>);
    expect(getByText('Currently playing')).toBeInTheDocument();
    expect(getByText('Putin FM')).toBeInTheDocument();
  });
});
