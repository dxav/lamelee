import React from 'react';

export const ReactionButtons: React.FC<{ onReact: (type: string) => void }> = ({ onReact }) => {
  const types = ['like', 'helpful', 'bookmark'];
  return (
    <div>
      {types.map(t => (
        <button key={t} onClick={() => onReact(t)} style={{ marginRight: 4 }}>{t}</button>
      ))}
    </div>
  );
};
