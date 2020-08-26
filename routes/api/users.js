const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please give a password of 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    res.send("User Route");
  }
);
module.exports = router;
