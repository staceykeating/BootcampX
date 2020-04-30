const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


let cohortName = [`%${process.argv[2]}%`]
pool.query(`SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM cohorts
JOIN students ON cohorts.id = cohort_id
JOIN assistance_requests ON students.id = student_id
JOIN teachers ON teacher_id = teachers.id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name
`, cohortName)
.then(res => {
  res.rows.forEach(user => {
  console.log(`${user.cohort}: ${user.teacher}`);
})
})
.catch(err => console.error('query error', err.stack));
