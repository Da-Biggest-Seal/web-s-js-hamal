// custom odpoved
exports.hello = (req, res) => {
	res.send('Hello Pane učiteli!');
};

// EJS sablony
exports.index = (req, res) => {
	res.render('index');
};

exports.kontakty = (req, res) => {
	res.render('kontakty');
};

exports.menu = (req, res) => {
	res.render('menu');
};

// vsechny ostatni URL jsou chyba
exports.notFound = (req, res) => {
	res.status(404).send('Stránka nenalezena');
};
