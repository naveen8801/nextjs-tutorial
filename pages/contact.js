import { useRef } from 'react';

export default function Contact() {
  const nameRef = useRef();
  const queryRef = useRef();

  async function handleSendButton(e) {
    e.preventDefault();
    e.stopPropagation();
    const body = {
      name: nameRef.current.value,
      query: nameRef.current.value,
    };
    const res = await fetch('/api/contactus', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
    console.log(res);
  }

  return (
    <div>
      <form
        onSubmit={handleSendButton}
        style={{
          disply: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            margin: '1rem',
          }}
        >
          <input type="text" placeholder="name" ref={nameRef} />
        </div>
        <div
          style={{
            margin: '1rem',
          }}
        >
          <textarea
            type="text"
            placeholder="Your query"
            ref={queryRef}
          ></textarea>
        </div>
        <div
          style={{
            margin: '1rem',
          }}
        >
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}
