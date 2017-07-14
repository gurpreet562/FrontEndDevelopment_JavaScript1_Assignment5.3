var myObj = { 
  "name":"John", 
  "age":30, 
  "salary":40000, 
  "address": { 
    "city":"hyderabad", 
    "state":"Arunachal Pradesh", 
    "pincode":76756 
  } 
} 
document.write("<br>Your name is:&nbsp" +myObj.name); 
document.write("<br>Your age  is:&nbsp" +myObj.age); 
document.write("<br>Your salary is:&nbsp" +myObj.salary); 
document.write("<br>Your city is:&nbsp" +myObj.address.city); 
document.write("<br>Your state is:&nbsp" +myObj.address.state); 
document.write("<br>Your pincode is:&nbsp" +myObj.address.pincode); 