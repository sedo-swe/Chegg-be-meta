-- Artists
SELECT * FROM artists;

SELECT first_name, last_name FROM artists;

SELECT * FROM artists WHERE is_alive = true;

SELECT * FROM artists WHERE last_name like 'B%';


-- Artworks
SELECT * FROM artworks;

SELECT description FROM artworks;

SELECT * FROM artworks WHERE name = 'The Horse Fair';

SELECT count(*) FROM artworks;