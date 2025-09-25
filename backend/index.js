const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/api/users', async (req, res) => {
try {
const response = await axios.get('https://jsonplaceholder.typicode.com/users');
const users = response.data.slice(0, 5); // only first 5 users
res.json(users);
} catch (error) {
console.error('Error fetching users:', error.message);
res.status(500).json({ message: 'Failed to fetch users' });
}
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
