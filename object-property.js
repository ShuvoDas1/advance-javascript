const students =[
    {id:1,name: 'shuvo'},
    {id:2,name: 'akib'},
    {id:3,name: 'sakib'}
]
// let names =[];
// for(let i = 0;i<students.length;i++){
//     const element = students[i];
//      names.push(element.name);
    
// }
// console.log(names);

const names = students.map(s => s.name);
const ids = students.map(s =>s.id);
const smaller =  students.filter(s => s.id < 3);
const smaller1 = students.find(s => s.id < 3);
console.log(smaller1);