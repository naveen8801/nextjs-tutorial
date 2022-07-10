import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div>Hello World !</div>
      <button onClick={() => router.push('/skills')}>Skills</button>
      <button onClick={() => router.push('/skills/python')}>
        Python skill
      </button>
      <button onClick={() => router.push('/skills/html/wev-dev')}>
        web-dev project of html
      </button>
    </div>
  );
}
