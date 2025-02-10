Create table product_status (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);

Insert into product_status (
    name
) values (
    'active'
), (
    'inactive'
), (
    'out_of_stock'
), (
    'discontinued'
);

CREATE table catalog (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    status integer NOT NULL DEFAULT 0 REFERENCES product_status (id),
    inventory_count INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);