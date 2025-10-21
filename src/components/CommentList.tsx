import React from 'react';
import { Comment } from '@prisma/client';

export const CommentList: React.FC<{ comments: Comment[] }> = ({ comments }) => (
  <ul>
    {comments.map(c => (
      <li key={c.id}>{c.content}</li>
    ))}
  </ul>
);
