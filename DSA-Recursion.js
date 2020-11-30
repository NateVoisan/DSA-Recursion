// Counting Sheep
console.log('Counting Sheep');
function sheep(num) {
    if (num === 0) {
        console.log('All sheep jumped over the fence');
    }
    else {
        console.log(`${num}: Another sheep jumps over the fence`);
        sheep(num - 1);
    }
};
console.log(sheep(3))

// Power Calculator
console.log('Power Calculator');
function powerCalculator(base, exponent) {
    if (exponent < 0) {
        return 'exponent should be greater than or equal to 0';
    }
    if (exponent === 1) {
        return base;
    }
    return base * powerCalculator(base, exponent - 1);
};
console.log(`${powerCalculator(10, 2)}`);


// Reverse String
console.log('Reverse String');
reverseString = (string) => {
    if (string.length === 1) {
        return string;
    }

    return reverseString(string.slice(0, -1)) + string.slice(-1);
};
console.log(reverseString('Hello'));


// nth Triangular Number
console.log('Triangle Number');
function triangleNumber(n) {
    if (n === 1) {
        return n;
    }
    return n + triangleNumber(n - 1);
};
console.log(triangleNumber(5));


// String Splitter
console.log('String Splitter');
const stringSplitter = function(string) {
    result = string.split('/');
    return result;
};
console.log(stringSplitter('11/30/2020'));


// Fibonacci
console.log('Fibonacci');
fibonacci = (num) => {
    if (num <= 0) {
        return 'Please enter a number greater than 0'
    }
    if (num === 1) {
        return 1;
    }
    if (num === 2) {
        return 1;
    }
    return fibonacci(num - 2) + fibonacci(num - 1);
};
console.log(fibonacci(7));


// Factorial
console.log('Factorial');
factorial = (n) => {
    if (n === 1) {
        return n;
    }
    return n * factorial(n - 1);
};
console.log(factorial(5));


// Find a way out of the maze
console.log('Escape the maze');
let smolMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]

function escape(maze) {
    this.maze = maze;
    this.traverse = function (column, row) {
        console.log('D');
        if (this.maze[column][row] == 2) {
            console.log('We solved the maze at (" + column + ", " + row + ")');
        } else if (this.maze[column][row] == 1) {
            console.log('At valid position (" + column + ", " + row + ")');
            this.maze[column][row] = 9;
            if (column < this.maze.length - 1) {
                console.log('R');
                this.traverse(column + 1, row);
            }
            if (column > 0) {
                console.log('L');
                this.traverse(column - 1, row);
            }
            if (row > 0) {
                console.log('U');
                this.traverse(column, row - 1);
            };
        };
    };
};

escape(smolMaze)


// Anagrams
console.log('anagrams')
function anagrams(prefix, str) {
    if (str.length <= 1) {
        console.log(prefix + str);
    }
    else {
        for (let i = 0; i < str.length; i++) {
            const current = str.substring(i, i + 1);
            const before = str.substring(0, i);
            const after = str.substring(i + 1);
            anagrams(prefix + current, before + after);
        };
    };
};

anagrams('', 'east')


// Organization Chart
console.log('Organization Chart');
const org = [
    { id: 'Zuckerberg', boss: null },
    { id: 'Schroepfer', boss: 'Zuckerberg' },
    { id: 'Schrage', boss: 'Zuckerberg' },
    { id: 'Sandberg', boss: 'Zuckerberg' },
    { id: 'Bosworth', boss: 'Schroepfer' },
    { id: 'Zhao', boss: 'Schroepfer' },
    { id: 'Steve', boss: 'Bosworth' },
    { id: 'Kyle', boss: 'Bosworth' },
    { id: 'Andra', boss: 'Bosworth' },
    { id: 'Richie', boss: 'Zhao' },
    { id: 'Sofia', boss: 'Zhao' },
    { id: 'Jen', boss: 'Zhao' },
    { id: 'VanDyck', boss: 'Schrage' },
    { id: 'Swain', boss: 'Schrage' },
    { id: 'Sabrina', boss: 'VanDyck' },
    { id: 'Michelle', boss: 'VanDyck' },
    { id: 'Josh', boss: 'VanDyck' },
    { id: 'Blanch', boss: 'Swain' },
    { id: 'Tom', boss: 'Swain' },
    { id: 'Joe', boss: 'Swain' },
    { id: 'Goler', boss: 'Sandberg' },
    { id: 'Hernandez', boss: 'Sandberg' },
    { id: 'Moissinac', boss: 'Sandberg' },
    { id: 'Kelley', boss: 'Sandberg' },
    { id: 'Eddie', boss: 'Goler' },
    { id: 'Julie', boss: 'Goler' },
    { id: 'Annie', boss: 'Goler' },
    { id: 'Rowi', boss: 'Hernandez' },
    { id: 'Inga', boss: 'Hernandez' },
    { id: 'Morgan', boss: 'Hernandez' },
    { id: 'Amy', boss: 'Moissinac' },
    { id: 'Chuck', boss: 'Moissinac' },
    { id: 'Vinni', boss: 'Moissinac' },
    { id: 'Eric', boss: 'Kelley' },
    { id: 'Ana', boss: 'Kelley' },
    { id: 'Wes', boss: 'Kelley' },
];

function organize(org, boss) {
    let node = {};
    org
        .filter(item => item.boss === boss)
        .forEach(item => node[item.id] = organize(org, item.id));
    return node;
};
console.log(JSON.stringify(organize(org, null)));


// Binary Representation
console.log('Binary Representation');
function binary(num) {
    if (num === 0) {
        return '0';
    }
    const dividedNum = Math.floor(num/2);
    const remainder = num % 2;
    if (dividedNum === 0) {
        return `${remainder}`;
    }
    return binary(dividedNum) + remainder.toString();
};
console.log(binary(25));