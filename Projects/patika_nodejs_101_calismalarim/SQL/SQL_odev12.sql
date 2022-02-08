--1
SELECT title, length from film
WHERE length > (
SELECT  avg(length) from film
);
--2
SELECT count(*)
from film
WHERE rental_rate = ANY
(
SELECT  rental_rate from film
ORDER BY rental_rate DESC
LIMIT 1
)
;
--3
SELECT title, rental_rate, replacement_cost FROM film
WHERE rental_rate = 
(SELECT MIN(rental_rate) FROM film) 
AND 
replacement_cost = 
(SELECT MIN(replacement_cost) FROM film)
;
--4
SELECT payment.customer_id, count(*), customer.first_name || ' ' || customer.last_name AS "İsim Soyİsim" FROM payment
INNER JOIN customer ON customer.customer_id = payment.customer_id
GROUP BY payment.customer_id, customer.first_name, customer.last_name
ORDER BY count(payment.amount) DESC;