import { default as Footer } from '.';
import { screen, render } from '@testing-library/react';

describe('footer component test', () => {

    test('it renders', () => {
        render(<Footer />)
  const btn = screen.getByRole('footer')
  expect(btn).toBeInTheDocument();
    });

});