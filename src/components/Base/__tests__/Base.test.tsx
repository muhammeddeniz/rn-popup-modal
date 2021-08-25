import React from 'react';
import { View } from 'react-native';
import { cleanup, render } from '@testing-library/react-native';

import Root from '../index';

describe('Root component test', () => {
  afterEach(cleanup);

  it('should render without crash', () => {
    const { getByTestId } = render(<Root />);
    const root = getByTestId('Root');

    expect(root).toBeTruthy();
  });

  it('should render children', () => {
    const childrenTestId = 'childrenView';
    const { getByTestId } = render(
      <Root children={<View testID={childrenTestId} />} />
    );
    const ChildrenView = getByTestId(childrenTestId);

    expect(ChildrenView).toBeTruthy();
  });

  it('should change style when given props', () => {
    const { getByTestId } = render(
      <Root style={{ backgroundColor: '#ddd' }} />
    );
    const root = getByTestId('Root');

    expect(root.props.style.backgroundColor).toBe('#ddd');
  });
});
