function testAllLearningGoals() {
    describe('06-all-learning-goals - trackStudentGrades', () => {
        it("should return an object with properties: passing and failing, both arrays", function() {
            const students = [];
            const result = trackStudentGrades(students);
            expect(result).toEqual(jasmine.objectContaining({
                passing: jasmine.any(Array),
                failing: jasmine.any(Array)
            }));
        });

        it("should correctly classify students based on grades and attendance", function() {
            const students = [
                { name: "Alice", grades: [85, 78, 92], attendance: 80 },
                { name: "Bob", grades: [30, 50, 65], attendance: 65 },
                { name: "Charlie", grades: [70, 75, 80], attendance: 90 },
                { name: "David", grades: [55, 60, 58], attendance: 75 },
                { name: "Eve", grades: [90, 95, 85], attendance: 65 }
            ];
            const result = trackStudentGrades(students);
            expect(result.passing).toContain("Alice");
            expect(result.passing).toContain("Charlie");
            expect(result.passing).not.toContain("Bob");
            expect(result.passing).not.toContain("David");
            expect(result.passing).not.toContain("Eve");
            expect(result.failing).toContain("Bob");
            expect(result.failing).toContain("David");
            expect(result.failing).toContain("Eve");
            expect(result.failing).not.toContain("Alice");
            expect(result.failing).not.toContain("Charlie");
        });

        it("should handle an empty students array", function() {
            const students = [];
            const result = trackStudentGrades(students);
            expect(result.passing).toEqual([]);
            expect(result.failing).toEqual([]);
        });
    });
}