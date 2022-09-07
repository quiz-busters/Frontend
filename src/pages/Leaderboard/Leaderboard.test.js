import React from 'react';

import { default as Leaderboard } from ".";

import { screen, render } from '@testing-library/react';

describe('quizform page test', () => {

    test('question page renders', () => {
        render(<Leaderboard />)
      
  test("it renders a form", () => {
    let form = screen.getByLabel("board");
    expect(form).toBeInTheDocument();
  });

  test("label players", () => { 
    let testIds = screen.queryByTestId('leadTitle');
  expect(testIds).toBeDefined();;
  });

})
})