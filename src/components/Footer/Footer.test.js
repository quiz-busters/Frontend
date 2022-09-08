import { default as Footer } from '.';
import { screen, render, getByText, getByTestId } from '@testing-library/react';

describe('footer component test',  () => {

    test('it renders', () => {
        render(<Footer />)
  const btn = screen.getByRole('footer')
  expect(btn).toBeInTheDocument();
  expect(screen.getByText('Play games')).toBeInTheDocument()
    });

    test('it tests className', () => {
  const boxes = screen.getByRole('foot');

   expect(boxes).toHaveClass('item');

    });

   


    


});