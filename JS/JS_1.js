// // masyvas
// let person={
// vardas:"Lukas", 
// pavarde:"Vaicekauskas", 
// hobbies:["filmai", "protmusiai", "keliones"],
// elpastas:"mano@gmail.com"
// };
// console.log(person.vardas,person.hobbies[1]);
// // Todos
const todos = [
    {
        id: 1,
        text:"Atlikti užduotis",
        isCompleted: true
    },
    {
        id: 2,
        text:"Treniruotė",
        isCompleted: true
    },
    {
        id: 3,
        text:"Apsipirkti",
        isCompleted: false
    },
    {
        id: 4,
        text:"Susitvarkyti",
        isCompleted: false
    }
];
// // For 1
// for (let i=0; i<=todos.length; i++) {
//     console.log(todos[i].text);
// }
// // For 2
// for(let todo of todos) {
//     console.log(todo.text);
// }
// // While
// let i=0;
// while(i < todos.length) {
//     console.log(todos[i].text);
//     i++;
// }
// For each
// todos.forEach(function(todo){
//     console.log(todo.text);
// });
// // Map
// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);
// Filter
// const todoUncompleted = todos.filter(function(todo) {
//     return todo.isCompleted === false;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoUncompleted);