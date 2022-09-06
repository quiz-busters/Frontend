import React from 'react';

import { default as QuizForm } from ".";

import { screen, render } from '@testing-library/react';

describe('quizform page test', () => {

    test('question page renders', () => {
        render(<QuizForm />)
      
  test("it renders a form", () => {
    let form = screen.getByLabel("game-selection");
    expect(form).toBeInTheDocument();
  });

  test("it renders a category dropdown menu", () => {
    let categoryInput = screen.getByLabelText("category");
    expect(categoryInput).toBeInTheDocument();
  });

 

  test("it renders difficulty types", () => {
    let numberOfQuestionsInput = screen.getByLabelText("difficulty type");
    expect(numberOfQuestionsInput).toBeInTheDocument();
  });
  
    });
    
    
    });