// // if
// if(x==10) {
//     console.log("x is 10");
// } 
// else if(x<10) {
//     console.log("x is less than 10");
// }
// else {
//     console.log("x is grater than 10");
// };

// ||
// const x = 6;
// const y = 15;
// if(x < 10 || y < 20) {
//     console.log("x is less than 10 or y is less than 20 ");
// };

// &&
// const x = 6;
// const y = 15;
// if(x < 10 && y < 20) {
//     console.log("x is less than 10 and y is less than 20 ");
// };

// ?-then :-else
// Switch
// const x = 15;
// const spalva = x > 10 ? "melyna" : "raudona";
// switch(spalva){
//     case "melyna":
//         console.log("spalva yra melyna");
//         break;
//     case "raudona":
//         console.log("spalva yra raudona");
//         break;
//     default:
//         console.log("spalve nera nei melyna, nei raudona, nei balta");
//         break;
// };

// const spalva = "geltona";
// switch(spalva){
//     case "melyna":
//         console.log("spalva yra melyna");
//         break;
//     case "raudona":
//         console.log("spalva yra raudona");
//         break;
//     case "balta":
//         console.log("spalva yra balta");
//         break;
//     default:
//         console.log("spalve nera nei melyna, nei raudona, nei balta");
//         break;
// };

// //Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
// };
// // Instantiate object
// const person1 = new Person ("Lukas", "Vaicekauskas", "1984-01-18");
// const person2 = new Person ("Marija", "Kazlauskaite", "1985-02-28");

// console.log(person1, person2);

// //Single element selector
// const form = document.getElementById("fcf-form");
// const form1 = document.querySelector(".title");
// console.log(form, form1);

// //Multiple element selector
// console.log(document.querySelectorAll(".item"));

// // textContent
// const ul = document.querySelector(".items");

// // textContent
// ul.firstElementChild.textContent = "Labas";

// // innerText
// ul.children[1].innerText = "Saulius";

// // innerHTML
// ul.lastElementChild.innerHTML = "<h3>Kazimieras</h3>";

