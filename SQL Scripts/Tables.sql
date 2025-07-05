CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quizzes (
    quiz_ID SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description TEXT,
    is_public BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE questions (
    question_id SERIAL PRIMARY KEY,
    quiz_ID INTEGER NOT NULL,
    question_text TEXT NOT NULL,
    choices JSONB,
    CONSTRAINT fk_quiz
        FOREIGN KEY (quiz_ID)
        REFERENCES  quizzes(quiz_ID)
        ON DELETE CASCADE
    );
    