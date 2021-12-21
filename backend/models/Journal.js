"use strict";
const db = require("./conn");

class Journal {
    static async getMonthlyEntries(user_id, month, year) {
        try {
            const response = await db.any(`
                SELECT journal.id, prompt_id, entry_date, response, question FROM journal
                INNER JOIN prompts ON prompts.id = journal.prompt_id
                WHERE user_id = '${user_id}' AND EXTRACT(month from entry_date) = ${month} 
                AND EXTRACT(year from entry_date) = ${year}
                ORDER BY entry_date ASC;
            `);
            return response;

        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

    static async getEntry(prompt_id) {
        try {
            const response = await db.one(`
                SELECT journal.id, response, question, entry_date
                FROM journal INNER JOIN prompts ON prompts.id = journal.prompt_id
                WHERE journal.id = ${prompt_id};
            `);
            return response;

        } catch(error) {
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
                UPDATE users 
                SET completed_prompts = array_append(completed_prompts, ${prompt_id})
                WHERE id = '${user_id}';
                UPDATE users
                SET last_complete = '${date}'
                WHERE id = '${user_id}';
            `);
            return response;

        } catch(error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

    static async updateEntry(entry_id, user_response) {
        try {
            const response = await db.any(`
                UPDATE journal
                SET response = '${user_response}'
                WHERE id = ${entry_id};
            `);
            return response;

        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }
}

module.exports = Journal;