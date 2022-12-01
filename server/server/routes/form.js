const express = require("express"),
  router = express.Router();
const Controller = require("../controller/form");

router.post("/formdata", Controller.formData);
router.get("/getAllData",Controller.getAllData);
router.get("/getdatabyid/:id",Controller.getdatabyId);
router.put("/update/:id",Controller.updatedata )
router.delete("/delete/:id",Controller.delete )
module.exports = router;




