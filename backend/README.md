<h1 align="center">Gratitude API 📕 </h1>
<p align="center">
  <a href="https://gratitude-journal1.herokuapp.com/"><strong>Base Url  https://gratitude-journal1.herokuapp.com »</strong></a>
</p>

<h1 align="center">Prompts</h1>

## Get All Prompts

`GET /prompts/:user_id`

Returns a random prompt from an array based on prompts already completed by that user. If all prompts are complete a random prompt will be sent based on the array of all prompts in the database.

<h1 align="center">Journal </h1>

## Get All Journal Entries

`GET /journal/:user_id/:month/:year`

Month and year is required since the user has the ability to select a new month and year through the DatePicker. 

## Get Individual Entry

`GET /journal/:entry_id`

Example response:

```json
{
"id": 2,
"response": "I am grateful that I get to code all day and work on app. AND IT IS FRIDAY!",
"question": "What are you grateful for today?",
"entry_date": "2021-12-17T17:05:46.429Z"
}
```

## Add Journal Entry

`POST /journal/add`

Req body must contain user_id, userResponse, date, and prompt_id. Returns a success or error message and status. 

## Update a Journal Entry

`POST /journal/update`

Req body must contain entry_id and user_response. Returns a success or error message and status. 