//Managing routes
//Author : hariuc2001@gmail.com
//Date : 24-03-2022

const droute = require("../controller/dcontroller");
const router = require("express").Router();

//Methods
router.post("/add", droute.add);
router.get("/:id", droute.view);
router.delete("/:id", droute.del);
router.put("/:id", droute.update);

module.exports = router;
