import React from 'react';

import { default as Home } from ".";

import { screen, render } from '@testing-library/react';

describe('quizform page test', () => {

    test('question page renders', () => {
        render(<Home />)
      
  test("test home", () => {
    let form = screen.getByLabel("home");
    expect(form).toBeInTheDocument();
  });

  test("label score test", () => { 
   // let testIds = screen.queryByTestId('leadTitle');
 //expect(testIds).toBeDefined();;
 let form = screen.getByLabel("score");
 expect(form).toBeInTheDocument();
  });

})
})