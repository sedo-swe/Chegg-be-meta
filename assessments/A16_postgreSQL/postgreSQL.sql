Artists
CREATE TABLE artists (
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    birthday date NOT NULL,
    is_alive boolean NOT NULL default true
);

==>
CREATE TABLE IF NOT EXISTS articles (
  article_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  title varchar(255) NOT NULL UNIQUE,
  abstract TEXT NOT NULL,
  body varchar,
  author TEXT NOT NULL,
  created_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO articles
  (title, abstract, author)
  VALUES (
    'Five uses for paper that you never imagined',
    'List five surprising uses for paper that you would not think of on your own',
    'Dwight Schrute'
  );

Museums
CREATE TABLE museums (
  name varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  state varchar(2) NOT NULL
);

Paintings
CREATE TABLE paintings (
  name varchar(255) NOT NULL,
  medium varchar(255) NOT NULL,
  description text
);

SELECT department, count(*), sum(price), min(price), max(price), avg(price)
FROM products
GROUP BY department
ORDER BY department;