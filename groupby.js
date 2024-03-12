const employee = [
    { name: 'Sue', age: 25, title:'Front End Developer' },
    { name: 'Joe', age: 30, title:'Front End Developer' },
    { name: 'Frank', age: 25, title:'Mern Developer' },
    { name: 'kaushal', age: 35, title:'Java Developer' },
    { name: 'Rohan', age: 35, title:'DotNet Developer' },
    { name: 'Rishu', age: 35, title:'Mean Developer' }
]
// const titleTypes = Object.groupBy(employee, ({title}) => title)
// console.log(titleTypes)

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];
const result = Object.groupBy(inventory, ({ type }) => type);
