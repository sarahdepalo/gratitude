"use strict";

const express = require("express");
const router = express.Router();
const PromptModel = require("../models/Prompts");

const randomize = (array) => {
  const random = array.sort(() => Math.random() - 0.5);
  return random[0];
}

router.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const prompts = await PromptModel.getPrompt(user_id);
  console.log(prompts)
  if (prompts.length > 0) {
    res.json(randomize(prompts)).status(200);
  } else {
    const allPrompts = await PromptModel.getAll();
    res.json(randomize(allPrompts)).status(200);
  }

});

module.exports = router;
