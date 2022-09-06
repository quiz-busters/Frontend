import Input from '.';
import { render, screen } from '@testing-library/react';

describe('input component', () => {

    test('test input role', () => {
        render(<Input />)
        const heading = screen.getByRole('myInput')
        expect(heading).toBeInTheDocument()
    });

});