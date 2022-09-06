import { default as Result } from '.';
import React from 'react';

import { screen, render } from '@testing-library/react';

describe('result page test', () => {

    test('result page renders', () => {
        render(<Result />)
       // const heading = screen.getByRole('heading');
       // expect(heading.textContent).toMatch(/myresult/i);

        const heading = screen.getByRole('heading')
        expect(heading.textContent).toContain('Player : ');
    });

    test('result page match test ', () => {
        render(<Result />)
       const heading = screen.getByRole('heading');
       expect(heading.textContent).toMatch(/myresult/i);

    
    });

});

/*import '@testing-library/jest-dom';

import { default as Result } from '.';
import {  screen } from '@testing-library/react';

describe('Result', () => {
    beforeEach(() => {
       
    });

    test('it shows the sunrise results', async () => {
        const sunrise = await screen.findByText("2:21:09 AM");
        expect(sunrise).toBeInTheDocument();
    });

    test('it shows the sunset results', async () => {
        const sunset = await screen.findByText("2:24:50 PM");
        expect(sunset).toBeInTheDocument();
    });
});*/