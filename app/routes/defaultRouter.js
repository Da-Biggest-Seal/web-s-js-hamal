// priprava routeru
const router = require('express').Router();
const controller = require('../controllers/defaultController');
const recenzeController = require('../controllers/recenzeController');

// custom URL s custom odpovedi
router.get('/hello', controller.hello);

// custom URL s EJS sablonou
router.get(['/','/index'], controller.index);
router.get('/kontakty', controller.kontakty);
router.get('/menu', controller.menu);

// recenze
router.get('/recenze', recenzeController.recenze);
router.post('/recenze', recenzeController.pridatRecenzi);
router.get('/recenze/:id', recenzeController.detailRecenze);
router.post('/recenze/:id/smazat', recenzeController.smazatRecenzi);

// vsechny ostatni URL jsou chyba
router.use(controller.notFound);

// exportovani routeru pro pouziti v aplikaci
module.exports = router;
