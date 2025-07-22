alert("Task 1");
const name = prompt("What's your name?");
alert(`Hi, ${name}`);

alert("Task 2");
const year = 2025;
birth_year = prompt("Enter your birth year:");
age = year - birth_year;
alert(`Your age is ${age}`);

alert("Task 3");
square_side = prompt("Enter the length of the side of a square:");
perimeter = 4 * square_side;
alert(`The perimeter of square is ${perimeter}`);

alert("Task 4");
radius = prompt("Enter the radius of circle:");
area = Math.PI * radius ** 2;
alert(`The area of circle is ${area}`);

alert("Task 5");
distance = prompt("Enter the distance between cities:");
time = prompt("Enter the time you want to get to another city:");
speed = distance / time;
alert(`Your speed should be ${speed} km/h or higher.`);

alert("Task 6");
const euro = 0.86;
dollars = prompt("Enter the quantity of dollars:");
result = dollars * euro;
alert(`The amount is ${result}`);

alert("Task 7");
storage_capacity = prompt("Enter storage capacity");
quantity = Math.floor(storage_capacity * 1024 / 820);
alert(`You can download file ${quantity} times`);

alert("Task 8");
money = prompt("Enter an amount of money you have:");
chocolate_price = prompt("Enter a price of one chocolate bar:");
quantity_1 = money / chocolate_price;
quantity_2 = Math.floor(quantity_1);
rest = quantity_1 - quantity_2;
alert(`You can buy ${quantity_2} chocolate bars`);
alert(`Your rest is ${rest}`);

alert("Task 9");
result = 0;
number = prompt("Enter 3-digit number:");
result += number % 10 * 100;
number -= number % 10;
result += number % 100;
number -= number % 100;
result += number / 100;
alert(`Palindrome of your number is ${result}.`);

alert("Task 10");
integer = prompt("Enter an integer:");
isEven = integer % 2 === 0;
result = (isEven && "even") || "odd";
alert(`Your number is ${result}.`);