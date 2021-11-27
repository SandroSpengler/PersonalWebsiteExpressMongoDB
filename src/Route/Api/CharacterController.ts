const express = require("express");
const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.send({ message: "All Users" });
});

module.exports = router;

export {};
