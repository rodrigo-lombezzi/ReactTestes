import { useState } from 'react';
import Greeting from './components/Greeting';
import LoginForm from './components/LoginForm';

export default function App() {
  const [username, setUsername] = useState('');

  return (
    <div>
      {username ? (
        <Greeting name={username} />
      ) : (
        <LoginForm onLogin={setUsername} />
      )}
    </div>
  );
}