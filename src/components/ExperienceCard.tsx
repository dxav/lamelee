import React from 'react';
import { Experience } from '@prisma/client';

export const ExperienceCard: React.FC<{ exp: Experience }> = ({ exp }) => (
  <div style={{ border: '1px solid #ccc', padding: 12, marginBottom: 12 }}>
    <h3>{exp.title}</h3>
    <p>{exp.description}</p>
    <small>{exp.aiAssistantType}</small>
    <div>{exp.tags?.join(', ')}</div>
  </div>
);
