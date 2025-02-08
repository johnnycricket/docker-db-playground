CREATE TABLE address (
    id uuid PRIMARY KEY gen_random_uuid(),
    user_id uuid NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    zip VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    FOREIGN KEY (user_id) REFERENCES user (id) On DELETE CASCADE
);