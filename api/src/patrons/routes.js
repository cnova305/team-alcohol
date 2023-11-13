const { Router } = require("express");
const pool = require("../db");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getPatrons);
router.post("/addPatron", controller.addPatron);
router.get("/getPatronById/:id", controller.getPatronById);
router.put("/:id", controller.updatePatron);
router.delete("/deletePatronById/:id", controller.deletePatron);
router.put("/addDrink/:id", controller.addDrink);

module.exports = router;
