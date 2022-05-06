CREATE TABLE IF NOT EXISTS rols
(
    id   serial PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS users
(
    id       serial PRIMARY KEY,
    nickname VARCHAR NOT NULL CHECK ( nickname <> ''),
    email    VARCHAR NOT NULL CHECK ( email <> '' ),
    password VARCHAR NOT NULL CHECK ( password <> '' )
);

CREATE TABLE IF NOT EXISTS detail_users
(
    id      serial PRIMARY KEY,
    name    VARCHAR NOT NULL CHECK ( name <> '' ),
    usersId integer REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS User_has_Rol
(
    id   serial PRIMARY KEY,
    "user" integer REFERENCES users (id),
    rol  integer REFERENCES rols (id)
);