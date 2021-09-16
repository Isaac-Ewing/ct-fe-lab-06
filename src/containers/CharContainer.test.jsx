import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// import mortydetail from '../fixtures/mortydetail.json';
import ACCharacterDetails from './CharContainer';

const mockServer = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/:id', (req, res, ctx) => {
    return res(ctx.json({ }));
  })
);

describe('chartater detail page', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('has the details of only a single character', async () => {
    render(
      <MemoryRouter initialEntries={['/2']}>
        <ACCharacterDetails />
      </MemoryRouter>
    );

    // screen.getByAltText('loading spinner');

    const character = await screen.findByText('Admiral', { exact: false });

    expect(character).toMatchSnapshot();
  });
});
