import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// import charDetails from '../fixtures/CharContainerRes.json';
import ACCharacterDetails from './CharContainer';

const mockServer = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e460', (req, res, ctx) => {
    return res(ctx.json({
      name: 'Admiral',
      quote: 'Only quitters give up.',
      personality: 'cranky'
    }));
  })
);

describe('chartater detail page', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('has the details of only a single character', async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: 'https://ac-vill.herokuapp.com/villagers/5f5fb4bbbfd05c2aed82e460' }]}>
        <ACCharacterDetails />
      </MemoryRouter>
    );
    screen.getByAltText('spin');

    return waitFor(() => {
      const character = screen.findByText('Admiral', { exact: false });
      expect(character).toMatchSnapshot();
    }, { timeout: 2000 });
  });
});
