const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.json({message: 'Hallooo'});
});

app.get('/berhasil', (req, res) => {
    res.json({message: 'Yeaayy Berhasil'});
})

app.get('/coba/:id', (req, res) => {
    res.json({message: 'ada paramsnya', data:id});
})

app.get('/tes', (req, res) => {
    res.json({message: 'masoook tesnya'});
})

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
