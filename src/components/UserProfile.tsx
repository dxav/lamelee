import React from 'react';
import { User } from '@prisma/client';

export const UserProfile: React.FC<{ user: User }> = ({ user }) => (
  <div>
    <img src={user.avatarUrl || ''} alt={user.username} width={64} height={64} />
    <h2>{user.username}</h2>
    <p>{user.bio}</p>
  </div>
);
