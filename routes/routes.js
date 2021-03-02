const express = require("express");
const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => res.send("Hola Mundo!!!"));

  router.post("/", (req, res) => {
    res.status(201).json(req.body);
  });

  return router;
};
