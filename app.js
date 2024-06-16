const express = require('express');
const path = require('path');

const app = express();
const port = 3001; // Use uma porta diferente, como 3001

// Configurar EJS como o motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para renderizar o index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para renderizar o category.ejs
app.get('/category', (req, res) => {
    res.render('category');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
