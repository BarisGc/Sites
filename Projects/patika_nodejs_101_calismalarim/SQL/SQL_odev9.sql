--1
SELECT city.city, country.country
FROM city
INNER JOIN country ON country.country_id = city.country_id;
--2
SELECT customer.first_name, customer.last_name
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id;
--3
SELECT rental.rental_id, customer.first_name, customer.last_name
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id;