-- Schema for waitlist table
DROP TABLE IF EXISTS waitlist;

CREATE TABLE waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    child_name TEXT NOT NULL,
    child_age INTEGER NOT NULL,
    insurance TEXT NOT NULL,
    parent_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    message TEXT,
    submission_date TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Create index on submission date for sorting and filtering
CREATE INDEX idx_waitlist_submission_date ON waitlist(submission_date);
