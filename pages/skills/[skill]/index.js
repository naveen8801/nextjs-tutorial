import { useRouter } from 'next/router';

export default function () {
  const router = useRouter();
  const skill = router.query.skill;
  return <div>Skill is {skill}</div>;
}
