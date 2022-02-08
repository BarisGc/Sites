--1
SELECT country.country, city.city 
FROM country
LEFT JOIN city on country.country_id = city.country_id;
--2
SELECT payment.payment_id, customer.first_name, customer.last_name
FROM payment
RIGHT JOIN customer ON customer.customer_id = payment.customer_id;
--3
SELECT rental.rental_id, customer.first_name, customer.last_name
FROM rental
FULL JOIN customer ON customer.customer_id = rental.customer_id;