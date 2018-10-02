const Student = require('./models/students');
const Test = require('./models/tests');
const faker = require('faker');
const db = require('./db')
const Promise = db.Promise  // gives us Promise.map

const SUBJECTS = [
    'English',
    'Geometry',
    'History',
    'Art',
    'Baking',
    'Computers'
]

async function seed() {
    await db.sync({ force: true })
    const students = await seedStudents()
    console.log(students.map(_ => _.fullName))
    console.log('Seeded', students.length, 'students.')
    const tests = await seedTests(students)
    console.log('Seeded', tests.length, 'tests.')
}

function seedStudents() {
    return Promise.all(
        new Array(50).fill(1).map(() =>
            Student.create({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email()
            })
        )
    )
}

async function seedTests(students) {
    const studentTests = await Promise.map(students, student =>
        Promise.map(SUBJECTS, subject => 
            Test.create({
                subject,
                grade: Math.random() * 100,
                studentId: student.id,
            })
        )
    )

    return studentTests.reduce((all, one) => all.concat(one))
}


const exit = () => process.exit(0)
const die = err => {
    console.error(err)
    process.exit(1)
}

if (module === require.main)
    seed().then(exit, die)