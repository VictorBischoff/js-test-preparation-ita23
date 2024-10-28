/**
 * This function determines which students pass based on grades and attendance. Attendance should be above 70 and the average grades should be above 60
 *
 * @param {array} students - An array of student objects with `name`, `grades`, and `attendance`.
 * @returns {object} - An object with arrays of names of passing and failing students.
 *
 * Usage:
 * const students = [
 *   { name: "Alice", grades: [85, 78, 92], attendance: 80 },
 *   { name: "Bob", grades: [30, 50, 65], attendance: 65 }
 * ];
 * const result = trackStudentGrades(students);
 * console.log(result); // Outputs { passing: ["Alice"], failing: ["Bob"] }
 */
function trackStudentGrades(students) {
    const result = { passing: [], failing: [] };

    for (const student of students) {
        const totalGrades = student.grades.reduce((sum, grade) => sum + grade, 0);
        const averageGrade = totalGrades / student.grades.length;

        if (student.attendance > 70 && averageGrade > 60) {
            result.passing.push(student.name);
        } else {
            result.failing.push(student.name);
        }
    }

    return result;
}



