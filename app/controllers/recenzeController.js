// recenze ulozene v JSON souboru
const fs = require('fs');
const path = require('path');
const recenzeSoubor = path.join(__dirname, '..', 'data', 'recenze.json');

function nactiRecenze() {
	try {
		return JSON.parse(fs.readFileSync(recenzeSoubor, 'utf8'));
	} catch {
		return [];
	}
}

function ulozRecenze(recenze) {
	fs.writeFileSync(recenzeSoubor, JSON.stringify(recenze, null, 2));
}

// seznam recenzi (jen nadpisy) + formular
exports.recenze = (req, res) => {
	res.render('recenze', { recenze: nactiRecenze(), chyba: null });
};

// ulozeni nove recenze z formulare
exports.pridatRecenzi = (req, res) => {
	const nadpis = (req.body.nadpis || '').trim();
	const popis = (req.body.popis || '').trim();
	const recenze = nactiRecenze();

	if (!nadpis || !popis) {
		return res.status(400).render('recenze', { recenze, chyba: 'Vyplňte nadpis i popis.' });
	}

	const id = recenze.reduce((max, r) => Math.max(max, r.id), 0) + 1;
	recenze.push({ id, nadpis, popis, datum: new Date().toISOString() });
	ulozRecenze(recenze);
	res.redirect('/recenze');
};

// detail jedne recenze
exports.detailRecenze = (req, res, next) => {
	const recenze = nactiRecenze().find(r => r.id === Number(req.params.id));
	if (!recenze) return next();
	res.render('recenze-detail', { recenze });
};

// smazani recenze
exports.smazatRecenzi = (req, res, next) => {
	const recenze = nactiRecenze();
	const zbyle = recenze.filter(r => r.id !== Number(req.params.id));
	if (zbyle.length === recenze.length) return next();
	ulozRecenze(zbyle);
	res.redirect('/recenze');
};
