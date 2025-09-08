import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim()) onLogin(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}