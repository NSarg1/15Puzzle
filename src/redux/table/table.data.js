export const data = [
    { id: 0, num: 1, animate: null },
    { id: 1, num: 2, animate: null },
    { id: 2, num: 3, animate: null },
    { id: 3, num: 4, animate: null },
    { id: 4, num: 5, animate: null },
    { id: 5, num: 6, animate: null },
    { id: 6, num: 7, animate: null },
    { id: 7, num: 8, animate: null },
    { id: 8, num: 9, animate: null },
    { id: 9, num: 10, animate: null },
    { id: 10, num: 11, animate: null },
    { id: 11, num: 12, animate: null },
    { id: 12, num: 13, animate: null },
    { id: 13, num: 14, animate: null },
    { id: 14, num: 15, animate: null },
    { id: 15, num: 16, animate: null },
];

// Generate a solvable 15-puzzle configuration
export const generateSolvablePuzzle = () => {
    // Create array with numbers 1-16
    let numbers = [];
    for (let i = 1; i <= 16; i++) {
        numbers.push(i);
    }

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Check if the puzzle is solvable, if not, make it solvable
    if (!isSolvable(numbers)) {
        // Swap two non-blank tiles to change parity
        // Find first two non-16 numbers and swap them
        let firstIdx = -1;
        let secondIdx = -1;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] !== 16) {
                if (firstIdx === -1) {
                    firstIdx = i;
                } else if (secondIdx === -1) {
                    secondIdx = i;
                    break;
                }
            }
        }

        // Swap to fix solvability
        [numbers[firstIdx], numbers[secondIdx]] = [numbers[secondIdx], numbers[firstIdx]];
    }

    // Convert 16 to null for empty space
    return numbers.map(num => num === 16 ? null : num);
};

// Check if a 15-puzzle configuration is solvable
const isSolvable = (arr) => {
    let inversions = 0;
    let blankRow = 0;

    // Count inversions and find blank position
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 16) {
            // Blank tile - find which row it's in (0-indexed from top)
            blankRow = Math.floor(i / 4);
            continue;
        }

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] !== 16 && arr[i] > arr[j]) {
                inversions++;
            }
        }
    }

    // For 15-puzzle (4x4 grid):
    // - If blank is on even row from bottom (odd row from top), inversions must be even
    // - If blank is on odd row from bottom (even row from top), inversions must be odd
    const blankRowFromBottom = 3 - blankRow;

    if (blankRowFromBottom % 2 === 0) {
        return inversions % 2 === 0;
    } else {
        return inversions % 2 === 1;
    }
};

// Initialize with a solvable puzzle
const initialPuzzle = generateSolvablePuzzle();
data.forEach((el, ind) => {
    el.num = initialPuzzle[ind];
});
