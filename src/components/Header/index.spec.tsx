import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from './index';

describe('Header', () => {
  it('should render', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders back arrow icon', () => {
    const { getByTestId, getByAltText} = render(<Header />);
    expect(getByTestId('backArrowIcon')).toBeInTheDocument();
    expect(getByAltText('Back arrow icon')).toBeInTheDocument();
  });

  it('renders  switch icon', () => {
    const { getByTestId, getByAltText } = render(<Header />);
    expect(getByTestId('switchIcon')).toBeInTheDocument();
    expect(getByAltText('Switch icon')).toBeInTheDocument();
  });
  
  it('should have alt property', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('switchIcon')).toHaveAttribute('alt');
    expect(getByTestId('backArrowIcon')).toHaveAttribute('alt');
  });
});
