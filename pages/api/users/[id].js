export default async function handler(req, res) {
    const { id } = req.query;
    const data = await fetchOnlyUser(id);
    res.status(200).json(data)
  }
  
  const fetchOnlyUser = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);	
    const data = await response.json();
    return data;
}