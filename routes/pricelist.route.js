const { getAllPrices, getOnePrice, addPrice, updPrice, delPrice } = require("../controller/pricelist.controller");
const router = require("express").Router();

router.route("/").get(getAllPrices).post(addPrice);
router.route("/:id").get(getOnePrice).patch(updPrice).delete(delPrice);

module.exports = router;
