import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PromptDisplay } from '../../components/PromptDisplay';
import { ReactionButtons } from '../../components/ReactionButtons';

export default function ExperienceDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [exp, setExp] = useState<any | null>(null);
  useEffect(() => { if (id) fetch(`/api/experiences/${id}`).then(r => r.json()).then(d => setExp(d.data)); }, [id]);
  if (!exp) return <div>Loading...</div>;
  return (
    <div>
      <h1>{exp.title}</h1>
      {(exp.prompts || []).map((p: any) => <PromptDisplay key={p.id} prompt={p} />)}
      <ReactionButtons onReact={() => {}} />
    </div>
  );
}
