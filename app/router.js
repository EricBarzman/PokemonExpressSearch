const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const bookmarksController = require('./controllers/bookmarksController');

router.get("/", mainController.homepage);
router.get("/detail/:id", mainController.detailPage);
router.get("/types", mainController.typesPage);

router.get("/search/name", searchController.searchName);
router.get("/search/type", searchController.searchType);

router.get("/bookmarks/", bookmarksController.bookmarksPage);
router.get("/bookmarks/add/:id", bookmarksController.addBookmarks);
router.get("/bookmarks/remove/:id", bookmarksController.removeBookmarks);

router.use((req, res) => {
    res.render('error', {error: 404, message: 'Pokemon Introuvable'});
})

module.exports = router;