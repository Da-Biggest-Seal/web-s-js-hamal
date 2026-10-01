// priprava routeru
const router = require('express').Router();

// custom URL s custom odpovedi
router.get('/hello', (req, res) => {
	res.send('Hello Pane učiteli!');
});

// custom URL s EJS sablonou
router.get(['/','/index'], (req, res) => {
	res.render('index');
});

router.get('/kontakty', (req, res) => {
	res.render('kontakty');
});

router.get('/menu', (req, res) => {
	res.render('menu');
});

// vsechny ostatni URL jsou chyba
router.use((req, res) => {
	res.status(404).send('Stránka nenalezena');
});

// exportovani routeru pro pouziti v aplikaci
module.exports = router;
