Create table order_status (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);

Insert into order_status (
    name
) values (
    'pending'
), (
    'shipped'
), (
    'delivered'
), (
    'cancelled'
);

CREATE TABLE orders (
    id serial PRIMARY KEY,
    user_id integer NOT NULL,
    address_id integer NOT NULL,
    products JSONB NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    status integer NOT NULL DEFAULT 0 REFERENCES order_status (id),
    FOREIGN KEY (user_id) REFERENCES users (id) On DELETE CASCADE,
    FOREIGN KEY (address_id) REFERENCES address (id) On DELETE CASCADE
);

-- [{"product_id": "fake-uuid", "count": 2}, {"product_id": "another-uuid", "count": 1}]