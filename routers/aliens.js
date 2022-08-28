const express = require("express");
const alien = require("../models/alien");

const router = express.Router();
const Aliens = require("../models/alien");

router.get("/", async (req, res) => {
  try {
    const aliens = await Aliens.find();
    res.json(aliens);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const alien = new Aliens({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const alien = await Aliens.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.patch('/:id', async(req,res) => {
    try {
        const alien = await Aliens.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    } catch (error) {
        res.send('Error')
    }
})
module.exports = router;
