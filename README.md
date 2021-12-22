<h1 align="center">Gratitude 📕 </h1>
<h2 align="center">Daily Journaling App</h2>   
<p align="center">
  <a href="https://github.com/sarahdepalo/gratitude/tree/main/backend"><strong>Explore The API Docs »</strong></a>
</p>

Gratitude was born from the desire of wanting to create a mobile-first application. I had a design in my head and needed to get it out in code. In the past, I have found that journaling about 3 things you're grateful for each day improved my mental health and self awareness. This was my main inspiration for the app, but instead of just writing about what you're grateful for, I wanted to include other positive journal prompts. This is a small app, but one that I really enjoyed making, especially working with PostgreSQL on the backend. I also experimented with dates more than I ever have in JavaScript. If you're reading this, I hope you check out the app and finish a journal prompt!

## Features ✨

* Daily journal prompt - once submitted, a user must wait until the next day to receive another prompt
* Prompts completed are kept track of in the db for each user to avoid duplicate prompts as much as possible. Once all prompts are completed, old ones will be cycled through again. 
* Each entry is displayed in a journal and organized by date completed. Entries can be displayed based on month chosen by user. 
* Entries can be viewed individually and updated. 

## Screenshots


## Technoligies, Libraries, and all the good tech stuff 🤓

* PostgreSQL
* Express
* Node.js
* React
* Auth0
* DatePicker
* TsParticles
* Toastify

## Code Example 💻

This statement is run in the prompts route to determine what prompts the user has created. Based on the response a random prompt is sent that the user has not completed. If all are completed, all the prompts are shuffled again. 
```sql
SELECT * FROM PROMPTS
WHERE id NOT IN (
    SELECT unnest(completed_prompts)
    FROM users
    WHERE users.id = '${user_id}'
);
```
This statement is used in correspondence with the DatePicker on the frontend to return entries for the selected month/year. 
```sql
SELECT journal.id, prompt_id, entry_date, response, question FROM journal
INNER JOIN prompts ON prompts.id = journal.prompt_id
WHERE user_id = '${user_id}' AND EXTRACT(month FROM entry_date) = ${month} 
AND EXTRACT(year FROM entry_date) = ${year}
ORDER BY entry_date ASC;
```


