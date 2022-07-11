export default function Users(props) {
  const { users } = props;
  return (
    <div>
      <div>Users Data</div>
      <div>
        {users.map((item, i) => (
          <div key={i}>
            <p>{item.username}</p>
            <p>{item.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
}
