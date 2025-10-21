import React from 'react';
import { Prompt } from '@prisma/client';

export const PromptDisplay: React.FC<{ prompt: Prompt }> = ({ prompt }) => (
  <pre style={{ background: '#f7f7f7', padding: 8 }}>{prompt.content}</pre>
);
