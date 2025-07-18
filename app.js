const express = require('express');
const app = express();
    require('dotenv').config();
const port = process.env.PORT ?? 3030;

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


const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  // Tambahkan baris berikut:
  if (process.env.NODE_ENV === 'jenkins') {
    console.log('Server started successfully. Exiting for Jenkins.');
    process.exit(0);
  }
});
