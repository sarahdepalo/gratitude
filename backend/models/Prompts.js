"use strict";

const db = require("./conn");

class Prompts {
  static async getPrompt(user_id) {
    try {
      const response = await db.any(`
            SELECT * FROM PROMPTS
            WHERE id NOT IN (
              SELECT unnest(completed_prompts)
              FROM users
              WHERE users.id = '${user_id}'
            )
        `);
      return response
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async getAll() {
    try {
      const response = await db.any(`
            SELECT * FROM PROMPTS
        `);
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Prompts;
