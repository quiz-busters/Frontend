import { default as Button } from '.';
import { screen, render } from '@testing-library/react';

describe('btn component test', () => {

    test('it renders', () => {
        render(<Button />)
  const myBtn = screen.getByRole('button')
  expect(myBtn).toBeInTheDocument()
    });

});