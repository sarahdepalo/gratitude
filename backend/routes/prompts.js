"use strict";

const express = require("express");
const router = express.Router();
const PromptModel = require("../models/Prompts");

const randomize = (array) => {
  console.log(array)
  const random = array.sort(() => Math.random() - 0.5);
  return random[0];
};

router.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const prompts = await PromptModel.getPrompt(user_id);
  const date = await PromptModel.getCompletedDate(user_id);

  if (prompts.length > 0) {
    res
      .json({
        prompt: randomize(prompts),
        lastDate: date.last_complete,
      })
      .status(200);
  } else {
    const allPrompts = await PromptModel.getAll();
    res
      .json({
        prompt: randomize(allPrompts),
        lastComplete: lastComplete,
      })
      .status(200);
  }
});

module.exports = router;
