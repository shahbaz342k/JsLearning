SELECT CASE
    WHEN A + B <= C OR B + C <= A OR A + C <= B THEN 'Not A Triangle'
    WHEN A = B AND B = C AND A = C THEN 'Equilateral'
    WHEN A = B OR A = C OR B = C THEN 'Isosceles'
    WHEN A <> B AND B <> C THEN 'Scalene'
    END 
FROM TRIANGLES;


SELECT CASE 
	WHEN A + B <= C OR B + C <= A OR A + C <= B THEN 'Not A Triangle'
    WHEN A = B AND B = C AND A = C THEN 'Equilateral'
    WHEN A = B OR A = C OR B = C THEN 'Isosceles'
    WHEN A <> B AND B <> C THEN 'Scalene'
    END
FROM TRIANGLES;


SELECT
CONCAT(NAME, '(', SUBSTR(Occupation,1,1), ')' ) FROM OCCUPATIONS
order by NAME

SELECT CONCAT('There are a total of ', COUNT(Occupation), '', LOWER(Occupation), 's.' )
order by COUNT(Occupation);