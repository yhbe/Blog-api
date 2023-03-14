const express = require("express")
const controller = require("../controller/ctrlBlog")
const router = express.Router()

router.post("/", controller.post)
router.get("/", controller.get)
router.post("/:id", controller.addAComment)
router.put("/:id", controller.put)

module.exports = router