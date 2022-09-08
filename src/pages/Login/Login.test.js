import React from 'react';

import { default as Login } from ".";

import { screen, render } from '@testing-library/react';

describe('quizform page test', () => {

    test('question page renders', () => {
        render(<Login />)
      
  test("it renders login ", () => {
    let form = screen.getByLabel("userLogin");
    expect(form).toBeInTheDocument();
  });

  test("label players", () => { 
   // let testIds = screen.queryByTestId('leadTitle');
 // expect(testIds).toBeDefined();

  const heading = screen.getByTitle('Login')
  expect(heading).toBeInTheDocument()
  });


})
})