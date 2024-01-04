const express = require('express');
const app = express();

app.get('/', (req, res) => {res.send('¡Hola, mundo!');
});



const PORT = 3004;


app.use(express.static('public'));




app.listen(PORT, () => console.log(`servidor corriendo en ⚡ http://localhost:${PORT}`));
