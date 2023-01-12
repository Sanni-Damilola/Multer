const express = require("express");
const { postdata, getall, getone, deleteall, deletedata } = require("../Controller/control");
const multer = require("../Config/mult");

const router = express.Router();

router.route("/post").post(multer, postdata);
router.route("/getall").get(getall);
router.route("/getone/:id").get(getone);
router.route("/deleteall").delete(deleteall);
router.route("/delete/:id").delete(deletedata);

module.exports = router;
