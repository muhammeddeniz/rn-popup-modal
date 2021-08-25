import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';

import Modal from '../index';

describe('Modal component tests', () => {
  afterEach(cleanup);

  it('should render component without crash', () => {
    const fn: Function = jest.fn();
    const { getByTestId } = render(<Modal visible={true} setVisible={fn} />);
    const modal = getByTestId('Modal');

    expect(modal).toBeTruthy();
  });

  it('should render left button', () => {
    const fn: Function = jest.fn();
    const { getByTestId } = render(<Modal visible={true} setVisible={fn} />);
    const cancelButton = getByTestId('cancelButton');

    expect(cancelButton).toBeTruthy();
  });

  it('should left button bacground equal to gray', () => {
    const fn: Function = jest.fn();
    const { getByTestId } = render(<Modal visible={true} setVisible={fn} />);
    const cancelButton = getByTestId('cancelButton');

    expect(cancelButton.props.style.backgroundColor).toBe('#D0DEEB');
  });

  it('should render left button with given text', () => {
    const fn: Function = jest.fn();
    const text: string = 'Test_TEXT_LEFTBUTTON';
    const { getByTestId } = render(
      <Modal visible={true} setVisible={fn} leftButtonText={text} />
    );
    const leftButtonText = getByTestId('leftButtonText');

    expect(leftButtonText.props.children).toBe(text);
  });

  it('should render title with given text', () => {
    const fn: Function = jest.fn();
    const text: string = 'Test_TEXT_TITLE';
    const { getByTestId } = render(
      <Modal visible={true} setVisible={fn} title={text} />
    );
    const title = getByTestId('title');

    expect(title.props.children).toBe(text);
  });

  it('should render text with given prop', () => {
    const fn: Function = jest.fn();
    const text: string = 'Test_TEXT_TEXT';
    const { getByTestId } = render(
      <Modal visible={true} setVisible={fn} text={text} />
    );
    const TextElement = getByTestId('text');

    expect(TextElement.props.children).toBe(text);
  });

  it('should render right button', () => {
    const fn: Function = jest.fn();
    const { getByTestId } = render(<Modal visible={true} setVisible={fn} />);
    const rightButton = getByTestId('rightButton');

    expect(rightButton).toBeTruthy();
  });

  it('should render right button with given text', () => {
    const fn: Function = jest.fn();
    const text: string = 'Test_TEXT_RIGHTBUTTON';
    const { getByTestId } = render(
      <Modal visible={true} setVisible={fn} rightButtonText={text} />
    );
    const rightButtonText = getByTestId('rightButtonText');

    expect(rightButtonText.props.children).toBe(text);
  });

  it('should change right button background color with modalType props', () => {
    const fn: Function = jest.fn();
    const text: string = 'Test_TEXT_RIGHTBUTTON';
    const { getByTestId } = render(
      <Modal
        visible={true}
        setVisible={fn}
        modalType="Success"
        rightButtonText={text}
      />
    );
    const rightButton = getByTestId('rightButton');

    expect(rightButton.props.style.backgroundColor).toBe('#13C39C');
  });

  it('should trigger right button when pressed', () => {
    const fn: Function = jest.fn();
    const rightButtonFN: Function = jest.fn();
    const { getByTestId } = render(
      <Modal
        visible={true}
        setVisible={fn}
        onRightButtonPress={rightButtonFN}
      />
    );
    const rightButton = getByTestId('rightButton');

    fireEvent.press(rightButton);
    expect(rightButtonFN).toHaveBeenCalled();
    expect(rightButtonFN).toHaveBeenCalledTimes(1);
    fireEvent.press(rightButton);
    expect(rightButtonFN).toHaveBeenCalledTimes(2);
  });

  it('should change svg when modal type props change', () => {
    const fn: Function = jest.fn();
    const { getByTestId } = render(
      <Modal visible={true} setVisible={fn} modalType="Success" />
    );
    const doneSvg = getByTestId('doneSvg');

    expect(doneSvg).toBeTruthy();
  });
});
