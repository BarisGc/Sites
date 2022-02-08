--1
(SELECT first_name from actor
)
UNION
(SELECT first_name FROM customer);
--2
(SELECT first_name from actor
)
INTERSECT
(SELECT first_name FROM customer);
--3
(SELECT first_name from actor
)
EXCEPT
(SELECT first_name FROM customer);
--4
(SELECT first_name from actor
)
UNION ALL
(SELECT first_name FROM customer);

--

(SELECT first_name from actor
)
INTERSECT ALL
(SELECT first_name FROM customer);

--

(SELECT first_name from actor
)
EXCEPT ALL
(SELECT first_name FROM customer);