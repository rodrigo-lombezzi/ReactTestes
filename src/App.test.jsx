import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('fluxo de login exibe saudação com nome', () => {
  render(<App />);

  // Digita nome no LoginForm
  fireEvent.change(screen.getByPlaceholderText(/usuário/i), {
    target: { value: 'Oi' },
  });

  // Clica no botão "Entrar"
  fireEvent.click(screen.getByText(/entrar/i));

  // Verifica se Greeting aparece com o nome
  expect(screen.getByText(/olá, oi!/i)).toBeInTheDocument();
});