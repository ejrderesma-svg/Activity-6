
const students = [];

function addStudent(name, grade) {
    const student = {
        id: students.length + 1,
        name: name,
        grade: grade
    };

    students.push(student);
    console.log(`${name} was added successfully!`);
}

function displayStudents() {
    console.log("\n=== STUDENT GRADE LIST ===");

    students.forEach(student => {
        console.log(
            `ID: ${student.id} | Name: ${student.name} | Grade: ${student.grade}`
        );
    });
}

function calculateAverage() {
    if (students.length === 0) {
        console.log("No student records available.");
        return;
    }

    const total = students.reduce(
        (sum, student) => sum + student.grade, 0
    );

    const average = total / students.length;

    console.log(`Class Average: ${average.toFixed(2)}`);
}

addStudent("Elisha", 95);
addStudent("Angel", 90);
addStudent("Mark", 88);

displayStudents();
calculateAverage();
