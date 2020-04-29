SELECT day, count(id), sum(duration) as duration
FROM assignments
GROUP BY day
ORDER BY day;
