import Register from '.';
import { screen, render } from '@testing-library/react';

describe('About', () => {
    test('it renders', () => {
    render(<Register />)
    const heading = screen.getByRole('heading');
    expect(heading.textContent).toMatch(/register/i);
});

test('it tests heading', () => {
    
    let regRole = screen.queryByTestId('regHead');
    expect(regRole).toBeDefined();;
   
});


  

});