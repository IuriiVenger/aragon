import {render, screen} from '@testing-library/react';
import React from 'react';
import {TextareaSimple} from './textarea';

describe('TextareaSimple', () => {
  // eslint-disable-next-line
    function setup(args: any) {
    render(<TextareaSimple {...args} />);
    return screen.getByRole('textbox');
  }

  test('should render without crashing', () => {
    const element = setup({});
    expect(element).toBeInTheDocument;
  });
});
