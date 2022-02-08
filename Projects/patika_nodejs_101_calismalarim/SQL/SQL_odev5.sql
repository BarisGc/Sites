--1
SELECT title from film
WHERE title LIKE '%n'
ORDER BY LENGTH DESC
LIMIT 5;
--2
SELECT title, length from film
WHERE title LIKE '%n'
ORDER BY LENGTH ASC
LIMIT 5 OFFSET 5;
--3
SELECT last_name FROM customer
WHERE store_id = '1'
ORDER BY last_name DESC
LIMIT 4;