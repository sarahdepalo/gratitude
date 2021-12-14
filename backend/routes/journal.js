"use strict";

const express = require('express');
const router = express.Router();
const JournalModel = require("../models/Journal");

router.get("/", async (req, res) => {
    const { user_id, month } = req.body;
    const entries = await JournalModel.getMonthlyEntries(user_id, month);
    res.json(entries).status(200);
});


module.exports = router;