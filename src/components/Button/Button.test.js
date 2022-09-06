import { default as Button } from '.';
import { screen, render } from '@testing-library/react';

describe('btn component test', () => {

    test('it renders', () => {
        render(<Button />)
  const primaryButton = screen.getByRole('btn')
  expect(primaryButton).getByRole('ariarole')
    });

});