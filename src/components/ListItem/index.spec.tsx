import { render } from '@testing-library/react';

import ListItem from './index';

const getProps = (newProps?: any) => ({
    isOpen: false,
    children: <></>,
    ...newProps,
});

describe('ListItem', () => {
  it('should render', () => {
    const { asFragment } = render(<ListItem {...getProps()}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the station name', () => {
    const props = {
        children: <span>Test FM</span>
    };
    const { getByText } = render(<ListItem {...getProps(props)}/>);
    expect(getByText('Test FM')).toBeInTheDocument();
  });

  it('should render the station id', () => {
    const props = {
        children: <span>1,1</span>
    };
    const { getByText } = render(<ListItem {...getProps(props)}/>);
    expect(getByText('1,1')).toBeInTheDocument();
  });

  it('renders cover image and icons', () => {
    const props = {
        isOpen: true,
    };
    const { getByAltText } = render(<ListItem {...getProps(props)}/>);
    expect(getByAltText('Minus icon')).toBeInTheDocument();
    expect(getByAltText('Plus icon')).toBeInTheDocument();
    expect(getByAltText('Cover image')).toBeInTheDocument();
  });
});
