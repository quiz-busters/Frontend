import React from 'react';

import { default as Quiz } from ".";

import { screen, render } from '@testing-library/react';

describe('quizform page test', () => {

    test('question page renders', () => {
        render(<Quiz />)

  test("tests quiz ", () => {
    let form = screen.getByLabel("quiz");
    expect(form).toBeInTheDocument();
  });



})
})