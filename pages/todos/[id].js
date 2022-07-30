import { useRouter } from 'next/router';

export default function ToDo({ data }) {
  const router = useRouter();

  return (
    <div>
      <h2>This is todo with id {router.query.id}</h2>
      <ul>
        <li>{data.id}</li>
        <li>{data.title}</li>
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json());
  return {
    props: {
      data: res,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
    ],
    fallback: false,
  };
}
