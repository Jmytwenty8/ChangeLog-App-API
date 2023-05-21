import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleValidationErrors } from "./modules/middleware";

const router = Router();

/**
 *Product
 */

router.get("/product", () => {});
router.get("/product/:id", () => {});

router.put(
  "/product/:id",
  body("name").isString(),
  handleValidationErrors,
  (req, res) => {}
);

router.post(
  "/product",
  body("name").isString(),
  handleValidationErrors,
  () => {}
);

router.delete(
  "/product/:id",
  body("name").isString(),
  handleValidationErrors,
  (req, res) => {}
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
