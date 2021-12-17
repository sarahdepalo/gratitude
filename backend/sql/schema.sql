CREATE TABLE users(
    id UUID DEFAULT uuid_generate_v4(),
    nickname VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email_Verified BOOLEAN DEFAULT FALSE,
    completed_prompts integer[],
    last_complete timestamp without time zone,
    PRIMARY KEY (id)
);

CREATE TABLE prompts (
    id serial PRIMARY KEY,
    question text NOT NULL
);

CREATE TABLE journal (
    id serial PRIMARY KEY,
    user_id UUID references users(id),
    prompt_id integer references prompts(id),
    entry_date timestamp without time zone NOT NULL, 
    response text
);
