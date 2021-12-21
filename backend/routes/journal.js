"use strict";

const express = require('express');
const router = express.Router();
const JournalModel = require("../models/Journal");

router.get("/:user_id/:month/:year", async (req, res) => {
    const { user_id, month, year } = req.params;
    const entries = await JournalModel.getMonthlyEntries(user_id, month, year);
    console.log(entries)
    if(entries.length > 0 ) {
        res.json({
            "entries": entries, 
            "status": 200
        }).status(200);
    } else {
        res.json({
            "status": 500
        }).status(500)
    }
   
});

// gets individual entry for editing and viewing
router.get("/:entry_id", async (req, res) => {
    const { entry_id } = req.params;
    const entry = await JournalModel.getEntry(entry_id);
    res.json(entry).status(200);
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

router.post("/update", async (req, res) => {
    const {entry_id, user_response} = req.body;
    const response = await JournalModel.updateEntry(entry_id, user_response.replace(/'/g, "''"));
    if(response instanceof Error) {
        res.json({
            "message": "There was an error updating your entry. Please try again.",
            "status": 500
        }).status(500)
    } else {
           res.json({
            "message": "Entry has been updated.",
            "status": 200
        }).status(200)
    }
})


module.exports = router;