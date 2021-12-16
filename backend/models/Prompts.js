"use strict";

const db = require("./conn");

class Prompts {
  static async getPrompt() {
    try {
      const response = await db.any(`
            SELECT * FROM PROMPTS
        `);
      const randomPrompts = response.sort(() => Math.random() - 0.5)
      return randomPrompts[0];
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Prompts;
