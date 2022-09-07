import Input from '.';
import { render, screen } from '@testing-library/react';

describe('input component', () => {

    test('tests input role', () => {
        render(<Input/>);
      const heading = screen.getByLabelText('myInput')
        expect(heading).toBeInTheDocument();;

    });

});