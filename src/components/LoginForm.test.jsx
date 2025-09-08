import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('envia nome de usuário ao clicar em Entrar', () => {
  const mockLogin = jest.fn();
  render(<LoginForm onLogin={mockLogin} />);
  fireEvent.change(screen.getByPlaceholderText(/usuário/i), {
    target: { value: 'user' },
  });
  fireEvent.click(screen.getByText(/entrar/i));
  expect(mockLogin).toHaveBeenCalledWith('user');
});