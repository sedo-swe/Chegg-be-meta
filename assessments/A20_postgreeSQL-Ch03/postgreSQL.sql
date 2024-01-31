select * from grants;

select distinct EXTRACT(ISOYEAR FROM fiscal_year) from grants;

select sum(amount) from grants;

select sum(amount) from grants where fiscal_year = make_date(2016, 1, 1);

select sum(amount) from grants where EXTRACT(ISOYEAR FROM fiscal_year) = 2008 and applicant_name like '%Women%';

select distinct category from grants order by category;

SELECT fiscal_year, count(*), min(amount), max(amount)
FROM grants
GROUP BY fiscal_year 
ORDER BY fiscal_year desc;

update grants 
set category = 'Special Project Grants (SPG)'
where category = 'Special Grant';

DELETE FROM grants 
WHERE category = 'SPECIAL';