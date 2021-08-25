import React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import Toast from '../index';

describe('Modal component tests', () => {
  afterEach(cleanup);
  it('should render component without crash', () => {
    const fn: Function = jest.fn();
    const { getByTestId } = render(
      <Toast showToast={true} setShowToast={fn} />
    );
    const toast = getByTestId('Toast');

    expect(toast).toBeTruthy();
  });

  it('should render close svg', () => {
    const fn: Function = jest.fn();
    const { getByTestId } = render(
      <Toast showToast={true} setShowToast={fn} />
    );
    const closeSvg = getByTestId('closeSvg');

    expect(closeSvg).toBeTruthy();
  });

  it('should change background color when given toast type', () => {
    const fn: Function = jest.fn();
    const { getByTestId } = render(
      <Toast showToast={true} setShowToast={fn} type="Success" />
    );
    const toast = getByTestId('Toast');

    expect(toast.props.style.backgroundColor).toBe('#03A65A');
  });

  it('should render left icon', () => {
    const fn: Function = jest.fn();
    const { getByTestId } = render(
      <Toast showToast={true} setShowToast={fn} />
    );
    const leftIconContainer = getByTestId('leftIconContainer');

    expect(leftIconContainer.props.children).toBeTruthy();
  });

  it('should set prop title', () => {
    const fn: Function = jest.fn();
    const title: string = 'Test_TITLE';
    const { getByTestId } = render(
      <Toast showToast={true} setShowToast={fn} title={title} />
    );
    const Title = getByTestId('title');

    expect(Title.props.children).toBe(title);
  });

  it('should set prop text', () => {
    const fn: Function = jest.fn();
    const text: string = 'Test_TEXT';
    const { getByTestId } = render(
      <Toast showToast={true} setShowToast={fn} text={text} />
    );
    const Text = getByTestId('text');

    expect(Text.props.children).toBe(text);
  });
});
