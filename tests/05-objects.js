function testObjects() {
    describe('05-objects - createBook', () => {
        it("should return an object with properties: title, author, and year", function() {
            const myBook = createBook();
            expect(myBook).toEqual(jasmine.objectContaining({
                title: jasmine.any(String),
                author: jasmine.any(String),
                year: jasmine.any(Number)
            }));
        });
    });

    describe('05-objects - findBookByAuthor', () => {
        it("should return the correct book object by author if found", function() {
            const books = [
                {title: "Sample", author: "John Doe", year: 2020},
                {title: "Here I am", author: "Peter Hansen", year: 1987}
            ];
            const result = findBookByAuthor(books, "John Doe");
            expect(result).toEqual({title: "Sample", author: "John Doe", year: 2020});
        });
    });

    describe('05-objects - getOlderBooks', () => {
        it("should return all books published before a given year", function() {
            const books = [
                {title: "A", year: 1990},
                {title: "B", year: 2022}
            ];
            const oldBooks = getOlderBooks(books, 2000);
            expect(oldBooks).toEqual([{title: "A", year: 1990}]);
        });

        it("should return an empty array if no books are found published before a given year", function() {
            const books = [
                {title: "A", year: 2010},
                {title: "B", year: 2022}
            ];
            const oldBooks = getOlderBooks(books, 2000);
            expect(oldBooks).toEqual([]);
        });
    });

    describe("05-objects - calculateAverageRating", function() {
        it("should return the correct average rating for the provided movies", function() {
            const movies = [
                { title: "Movie A", ratings: [5, 4, 4] },
                { title: "Movie B", ratings: [3, 4, 5, 3] },
                { title: "Movie C", ratings: [5, 5, 5] }
            ];
            const averageRating = calculateAverageRating(movies);
            expect(averageRating).toBeCloseTo(4.3, 2);
        });

        it("should handle movies with single ratings", function() {
            const movies = [
                { title: "Movie A", ratings: [5] },
                { title: "Movie B", ratings: [3] },
                { title: "Movie C", ratings: [4] }
            ];
            const averageRating = calculateAverageRating(movies);
            expect(averageRating).toBeCloseTo(4.0, 1);
        });

        it("should handle movies with no ratings", function() {
            const movies = [
                { title: "Movie A", ratings: [] },
                { title: "Movie B", ratings: [3, 4, 5] },
                { title: "Movie C", ratings: [4, 4] }
            ];
            const averageRating = calculateAverageRating(movies);
            expect(averageRating).toBeCloseTo(4.0, 1); // (3+4+5+4+4)/5 = 4.0
        });


        it("should return 0 if the movies array is empty", function() {
            const movies = [];
            const averageRating = calculateAverageRating(movies);
            expect(averageRating).toBe(0);
        });

        it("should handle decimal ratings", function() {
            const movies = [
                { title: "Movie A", ratings: [4.5, 3.5] },
                { title: "Movie B", ratings: [2.5, 3.5] }
            ];
            const averageRating = calculateAverageRating(movies);
            expect(averageRating).toBeCloseTo(3.5, 1);
        });

        it("should handle negative ratings", function() {
            const movies = [
                { title: "Movie A", ratings: [-1, -2] },
                { title: "Movie B", ratings: [-3, -4] }
            ];
            const averageRating = calculateAverageRating(movies);
            expect(averageRating).toBeCloseTo(-2.5, 1);
        });


        it("should handle ratings that are zero", function() {
            const movies = [
                { title: "Movie A", ratings: [0, 0, 0] },
                { title: "Movie B", ratings: [0, 0, 0] }
            ];
            const averageRating = calculateAverageRating(movies);
            expect(averageRating).toBe(0);
        });

        it("should handle movies with extra properties", function() {
            const movies = [
                { title: "Movie A", ratings: [5, 4, 3], director: "Director A" },
                { title: "Movie B", ratings: [2, 3, 4], year: 2020 }
            ];
            const averageRating = calculateAverageRating(movies);
            expect(averageRating).toBeCloseTo(3.5, 1);
        });

        it("should handle an array with one movie", function() {
            const movies = [
                { title: "Movie A", ratings: [5, 5, 5] }
            ];
            const averageRating = calculateAverageRating(movies);
            expect(averageRating).toBe(5);
        });

    });

}