CREATE DATABASE movies_db;
\c movies_db

CREATE TABLE movies_imdb (
id SERIAL4 PRIMARY KEY,
poster_url TEXT,
title VARCHAR(200),
year INTEGER,
released VARCHAR(200),
runtime VARCHAR(200),
genre VARCHAR(200),
director VARCHAR(200),
writer VARCHAR(200),
actors VARCHAR(200),
imdb_id VARCHAR(100),
plot TEXT
);