import { default as QuizForm } from '../pages/QuizForm';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('SearchForm', () => {
    let getResultMock;
    const setup = () => render(<QuizForm />);

    beforeEach(() => {
        getResultMock = jest.fn();
    
    });
   

    test('it renders a form', () => {
        let form = screen.getByRole('textbox');
        expect(form).toBeInTheDocument();;
    });

    test('it calls on getResult prop on form submission', () => {
        let locationInput = screen.getByLabelText('username');
        userEvent.type(locationInput, "hong{enter}")
        expect(getResultMock).toHaveBeenNthCalledWith(1, 'hong');
    })
});