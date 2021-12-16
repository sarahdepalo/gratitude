"use strict";
const db = require("./conn");

class Journal {
    static async getMonthlyEntries(user_id, month) {
        try {
            const response = await db.any(`
                SELECT * FROM journal
                INNER JOIN prompts ON prompts.id = journal.prompt_id
                WHERE user_id = '${user_id}' AND EXTRACT(month from entry_date) = ${month}
                ORDER BY entry_date ASC;
            `);
            return response;

        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

    static async addEntry(user_id, userResponse, date, prompt_id) {
        try {
            const response = await db.any(`
                INSERT INTO journal
                (user_id, response, entry_date, prompt_id)
                VALUES
                ('${user_id}', '${userResponse}', '${date}', ${prompt_id});
            `);
            return response;

        } catch(error) {
            console.error("ERROR: ", error);
            return error;
        }
    }
}

module.exports = Journal;