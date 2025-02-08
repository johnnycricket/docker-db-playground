CREATE TABLE order (
    id uuid PRIMARY KEY gen_random_uuid(),
    user_id uuid NOT NULL,
    address_id uuid NOT NULL,
    products JSONB NOT NULL, -- [{"product_id": "fake-uuid", "count": 2}, {"product_id": "another-uuid", "count": 1}]
    total DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    status: VARCHAR(255) NOT NULL DEFAULT 'pending' REFERENCES order_status (name),
    FOREIGN KEY (user_id) REFERENCES user (id) On DELETE CASCADE,
    FOREIGN KEY (address_id) REFERENCES address (id) On DELETE CASCADE
);