import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renderiza com nome fornecido', () => {
  render(<Greeting name="user" />);
  expect(screen.getByText(/Olá, user!/i)).toBeInTheDocument();
});

test('renderiza com fallback para visitante', () => {
  render(<Greeting />);
  expect(screen.getByText(/Olá, visitante!/i)).toBeInTheDocument();
});