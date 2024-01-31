SELECT * from artworks;

UPDATE artworks
SET completion_date = 'August 1882';

UPDATE artworks
SET completion_date = 'July 1881'
where title = 'Still Life with Cabbage and Clogs';

UPDATE artworks
SET title = 'Landschaft mit Netzflickerinnen'
where title = 'Women Mending Nets in the Dunes';

truncate TABLE artworks;

DELETE FROM artworks
WHERE completion_date = 'August 1882';

DELETE FROM artworks
WHERE title = 'Still Life with Cabbage and Clogs';