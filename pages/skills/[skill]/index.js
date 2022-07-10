import { useRouter } from 'next/router';
import Link from 'next/link';

export default function () {
  const router = useRouter();
  const skill = router.query.skill;
  return (
    <div>
      <div>Skill is {skill}</div>
      <Link href={`/skills/${skill}/web-dev`}>
        <a>Project</a>
      </Link>
    </div>
  );
}
