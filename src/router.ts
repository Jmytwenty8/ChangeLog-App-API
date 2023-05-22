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

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "DEPRECATED", "SHIPPED"]),
  body("version").optional(),
  () => {}
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  () => {}
);
router.delete("/update/:id", () => {});

/**
 *Update Point
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.post(
  "/updatepoint",
  body("name").exists().isString(),
  body("description").exists().isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
