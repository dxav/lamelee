import React from 'react';
import { signIn } from 'next-auth/react';

// T057 Login page (simplified)
export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn('github')}>Login with GitHub</button>
    </div>
  );
}
