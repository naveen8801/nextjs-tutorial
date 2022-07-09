import { useRouter } from 'next/router';

export default function SkillName() {
  const router = useRouter();
  const skillName = router.query.skillName;

  return <div>Skill is {skillName}</div>;
}
