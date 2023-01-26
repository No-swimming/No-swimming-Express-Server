const router = require("express")();
const controller = require("./controllers/book");

router.get("/book/:start/:display/:searchBook", controller.book);

module.exports = router;
