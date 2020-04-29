SELECT DISTINCT teachers.name, cohorts.name
FROM cohorts
JOIN students ON cohorts.id = cohort_id
JOIN assistance_requests ON students.id = student_id
JOIN teachers ON teacher_id = teachers.id
WHERE cohorts.name = 'JUL02'
ORDER BY teachers.name

