import { useRouter } from 'next/router';
export default function () {
  const router = useRouter();
  const skill = router.query.skill;
  const project = router.query.project;

  return (
    <div>
      {skill} has project = {project}{' '}
    </div>
  );
}
