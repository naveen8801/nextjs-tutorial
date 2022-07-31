import Head from 'next/head';

export default function ToDos(props) {
  const { posts } = props;
  return (
    <div>
      <Head>
        <title>Todos</title>
      </Head>
      <h2>Visit "todos/[id]" for more info</h2>
      <ul>
        {posts &&
          posts.map((item, i) => (
            <li key={i}>
              <span>{item.id}</span> {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );
  return {
    props: {
      posts: res,
    },
  };
}
