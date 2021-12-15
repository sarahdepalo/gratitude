"use strict";

const express = require('express');
const router = express.Router();
const JournalModel = require("../models/Journal");

router.get("/", async (req, res) => {
    const { user_id, month } = req.body;
    const entries = await JournalModel.getMonthlyEntries(user_id, month);
    if(entries.length > 0 ) {
        res.json(entries).status(200);
    } else {
        res.json({
            "error": "No entries found."
        }).status(500)
    }
   
});


module.exports = router;