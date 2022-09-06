import Base from '.';
import { render, screen } from '@testing-library/react';

describe('base component', () => {

    test('it tests the header', () => {
        render(<Base />)
        const heading = screen.getByRole('heads')
        expect(heading).toBeInTheDocument()
    });

});