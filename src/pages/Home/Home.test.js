import Home from '.';
import React from 'react';

import { screen, render, waitFor } from '@testing-library/react';

import * as router from 'react-router'
import * as userEvent from '@testing-library/user-event'
import { withRouter } from 'react-router-dom';

describe('Home', () => {

  const user = userEvent.setup()
  const navigate = jest.fn()

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })
})