// const rows = ['row1', 'row2', 'row3'];

// const csvRows = ['row0', ...rows];

// console.log(csvRows);


const headerRow = "Reviewer,Rating,Title";

const rows = [
    "John,5,Great product",
    "Alice,4,Good product",
    "Bob,3,Average product"
];

const allRows = [ headerRow, ...rows ];

console.log(allRows);