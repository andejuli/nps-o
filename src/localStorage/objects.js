// Storing an object 
let user = { name: 'John', age: 30 }; 
localStorage.setItem('user', JSON.stringify(user)); 

// Retrieving the object 
let storedUser = JSON.parse(localStorage.getItem('user')); 
console.log(storedUser.name); // Output: John
