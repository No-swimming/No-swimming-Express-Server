const router = require("express")();
const controller = require("./controllers/book");

router.get("/book", controller.book);

module.exports = router;
