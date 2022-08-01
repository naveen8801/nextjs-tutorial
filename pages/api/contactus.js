export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, query } = req.body;
    console.log(req.body);
    res.status(200).json({ name: name, query: query });
  } else {
    res.status(200).json({ msg: 'GET Req. not supported' });
  }
}
