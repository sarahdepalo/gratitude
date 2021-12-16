"use strict";

const express = require('express');
const router = express.Router();
const PromptModel = require("../models/Prompts");


router.get("/", async (req, res) => {
    const prompt = await PromptModel.getPrompt();
    res.json(prompt).status(200);
});

module.exports = router;