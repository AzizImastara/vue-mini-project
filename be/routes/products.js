const express = require("express");
const {
  addProducts,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controller/products");
const router = express.Router();

router.post("/", addProducts);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
