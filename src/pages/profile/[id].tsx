import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ExperienceCard } from '../../components/ExperienceCard';

export default function UserProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<any | null>(null);
  useEffect(() => { if (id) fetch(`/api/users/${id}`).then(r => r.json()).then(d => setUser(d.data)); }, [id]);
  if (!user) return <div>Loading...</div>;
  return (
    <div>
      <h1>{user.username}</h1>
      <h2>Experiences</h2>
      {(user.experiences || []).map((e: any) => <ExperienceCard key={e.id} exp={e} />)}
    </div>
  );
}
