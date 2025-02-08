Create table order_status (
    id uuid PRIMARY KEY gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    updated_at TIMESTAMP NOT NULL DEFAULT now()
);

Create table product_status (
    id uuid PRIMARY KEY gen_random_uuid(),
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