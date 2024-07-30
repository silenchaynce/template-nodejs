const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.json({message: 'Hallooo'});
})

app.get('/tes', (res, res) => {
    res.json({ message: 'Masoookk tesnya', kode: 200});
});

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
