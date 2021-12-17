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

router.post("/add", async (req, res) => {
    const {user_id, userResponse, date, prompt_id} = req.body;
    const response = await JournalModel.addEntry(user_id, userResponse.replace(/'/g, "''"), date, prompt_id);

    if(response instanceof Error) {
        res.json({
            "message": "There was an error saving your entry. Please try again.",
            "status": 500
        }).status(500)
    } else {
           res.json({
            "message": "Entry has been added. You can edit and view the entry in your journal.",
            "status": 200
        }).status(200)
    }
});


module.exports = router;