SELECT assignments.id, assignments.day, assignments.chapter,assignments.name, count(assistance_requests.assignment_id) as total_requests
FROM assignments
JOIN assistance_requests
ON assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY total_requests DESC;
