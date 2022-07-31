import { useRouter } from 'next/router';
import Head from 'next/head';
export default function Post(props) {
  const { id, title } = props.data;
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Post -{router.query.id}</title>
      </Head>
      <h1>This is post with id {router.query.id}</h1>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  ).then((res) => res.json());

  return {
    props: {
      data: result,
    },
  };
}
