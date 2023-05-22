import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleValidationErrors } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getOneUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";

const router = Router();

/**
 *Product
 */

router.get("/product", getProducts);
router.get("/product/:id", getProductById);

router.put(
  "/product/:id",
  body("name").isString(),
  handleValidationErrors,
  updateProduct
);

router.post(
  "/product",
  body("name").isString(),
  handleValidationErrors,
  createProduct
);

router.delete(
  "/product/:id",
  body("name").isString(),
  handleValidationErrors,
  deleteProduct
);

/**
 *Update
 */

router.get("/update", getUpdates);
router.get("/update/:id", getOneUpdate);
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "DEPRECATED", "SHIPPED"]).optional(),
  body("version").optional(),
  handleValidationErrors,
  updateUpdate
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  handleValidationErrors,
  createUpdate
);
router.delete("/update/:id", deleteUpdate);

/**
 *Update Point
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").exists().isString(),
  handleValidationErrors,
  (req, res) => {
    res.json({ message: "success" });
  }
);
router.post(
  "/updatepoint",
  body("name").exists().isString(),
  body("description").exists().isString(),
  body("updateId").exists().isString(),
  handleValidationErrors,
  () => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
