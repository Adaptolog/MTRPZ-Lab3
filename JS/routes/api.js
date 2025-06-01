const express = require('express');
const router = express.Router();
const Fact = require('../models/Fact');

const facts = [
  "Марс має найвищий вулкан у Сонячній системі – Олімп.",
  "Юпітер настільки великий, що вмістив би всі інші планети.",
  "Венера обертається у зворотний бік, ніж більшість планет."
];

router.get('/fact', async (req, res) => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  const newFact = await Fact.create({ text: randomFact });
  res.json({ fact: randomFact, id: newFact._id });
});

router.get('/history', async (req, res) => {
  const history = await Fact.find().sort({ date: -1 }).limit(10);
  res.json(history);
});

module.exports = router;