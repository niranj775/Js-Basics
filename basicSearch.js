let myTodos = [];

myTodos.push('Prebootcamp workouts');
myTodos.push('Guvi JS Tamil Course');
myTodos.push('Code kata');
myTodos.push('Bootcamp Topics in Word having doubts on topics with interview Questions');
myTodos.push('Bootcamp Tasks');
myTodos.push('Other JS courses');

// console.log(myTodos.indexOf('Code kata'));

// console.log(myTodos.findIndex((todo)=>{
//     return todo == 'Code kata'
// }));

// let  findTodo = function (todoList, item){
//     let result = todoList.findIndex((todo)=>{
//         return todo.toLowerCase() == item.toLowerCase();
//     })
//     return result;
// }

// console.log(findTodo(myTodos, 'COde kata'));

// console.log(myTodos.find((todo)=>{
//     return todo.toLowerCase() == 'code kata';
// }));

let findTodo = (todoList, item) => {
   let res =  todoList.find((todo)=>{
        return todo.toLowerCase() == item.toLowerCase()
    })
    return res;
} 
console.log(findTodo(myTodos, "code kata"))