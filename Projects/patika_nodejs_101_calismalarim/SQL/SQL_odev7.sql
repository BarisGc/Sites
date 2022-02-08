--1
SELECT title, rating, COUNT(title) FROM film
GROUP BY title, rating;
--2
SELECT replacement_Cost, COUNT (*) FROM film
GROUP BY replacement_Cost
HAVING COUNT(title)>50;
--3
SELECT store_id, COUNT (customer_id) FROM customer
GROUP BY store_id;
--4
SELECT country_id, COUNT(city) FROM city
GROUP BY country_id
ORDER BY COUNT(city) DESC
LIMIT 1;
