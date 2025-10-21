import React from 'react';

export const PromptRating: React.FC<{ value: number; onRate: (v: number) => void }> = ({ value, onRate }) => (
  <div>
    {[1,2,3,4,5].map(v => (
      <span key={v} onClick={() => onRate(v)} style={{ cursor: 'pointer', color: v <= value ? 'gold' : '#ccc' }}>★</span>
    ))}
  </div>
);
