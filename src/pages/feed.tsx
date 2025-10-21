import React, { useEffect, useState } from 'react';
import { ExperienceCard } from '../components/ExperienceCard';

// T053 Feed page
export default function FeedPage() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    fetch('/api/experiences').then(r => r.json()).then(d => setItems(d.data || []));
  }, []);
  return (
    <div>
      <h1>Experience Feed</h1>
      {items.map(exp => <ExperienceCard key={exp.id} exp={exp} />)}
    </div>
  );
}
