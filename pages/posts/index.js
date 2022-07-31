import Head from 'next/head';

export default function Posts({ data }) {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>This is page to show getServerSideProps in actions </h1>
      <h2>Visit "posts/[id]" for specifc post </h2>
      <ul>
        {data &&
          data.map((item, i) => (
            <li key={i}>
              <span>{item.id}</span> {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos').then(
    (res) => res.json()
  );
  return {
    props: {
      data: res,
    },
  };
}
