import React, { useState } from 'react';

// T054 Create experience page (simplified)
export default function CreateExperiencePage() {
  const [title, setTitle] = useState('');
  const [prompt, setPrompt] = useState('');
  const submit = async () => {
    await fetch('/api/experiences', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, aiAssistantType: 'gpt', promptContent: prompt }) });
    setTitle(''); setPrompt('');
  };
  return (
    <div>
      <h1>Create Experience</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Prompt" />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
