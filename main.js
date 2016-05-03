
// 1. Output each item in the following Array to your console:

console.log("Question 1");

var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for (var i = 0; i < livingRoom.length; i++) {
	console.log(livingRoom[i]);
}


// 2. Using a loop, log numbers 22-33 in the console.
console.log("Question 2");

for(i = 22; i <= 23; i++) {
	console.log(i);
}


// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
console.log("Question 3");

for(i = 75; i <= 100; i += 5) {
	console.log(i);
}



// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.

console.log("Question 4");

var counter = 0;
var num = 2;

while (num < 1000); {
num += num;
console.log("This is how a professional loops.");
counter++;
}
console.log(counter); /// Not sure????



// 5. Write a conditional statement to find the largest of the numbers in the array provided.
console.log("Question 5");

var largestNum = [-5, -2, -6, 0, -1]
for(var i = 0; i < largestNum.length-1; i++){
 var num = largestNum[i];
   if(num < largestNum[i+1]){
     num = largestNum[i+1]
   }
 }
 console.log(num);



// 6. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.
console.log("Question 6");
for (i = 10; i < 101; i += 25) {
console.log("At home, I have " + i + " cats.");	
}

var counter = 10;
while (counter < 101) {
	console.log("At home, I have " + counter + " cats.");	
	counter += 25;
}



// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
console.log("Question 7");
var numArray = [2, 17, 9, 24, 8];

for (i = 0; i < numArray.length; i++) {
	if (numArray[i] % 2 === 0 && numArray[i] > 10) {
 +		console.log("Even and greater than 10");
 	} else if (numArray[i] % 2 === 0)	{
		console.log ('Even');
	} else  {
		console.log("Odd");
	}
}


// 8. Given the following Array, create variable numThrees with the value [13, 23, 33, 43, 53, 63, 73]console.log("Question 2");
console.log("Question 8");
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77]
var numThrees = [];
for (i = 0; i < numArray.length; i += 3 ) {
	numThrees.push(numArray[i])
}
console.log(numThrees);


// 9. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######
console.log("Question 9");
for (i = '#'; i.length < 8; i+='#') {
	console.log(i);
}



// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.


// 10. Use a variable called "human" to prompt the user to type their choice.
var human = prompt('Rock, paper, or scissors?');

// 11. Define an array called "choices" that consists of "paper", "rock", and "scissors".
var choicesArray = ['rock', 'paper', 'scissors'];

// 12. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.
var computer = Math.random();

// 13. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console

if (computer >= 0 && computer <=0.33) {
	computer = 'rock';
	console.log(computer);
}


// 14. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)
if (computer >= 0.34 && computer <=0.66) {
	computer = 'paper';
	console.log(computer);
}
if (computer >= 0.67 && computer <=1) {
	computer = 'scissors';
	console.log(computer);
}

console.log('You played: ', human);
console.log('Your opponent played: ', computer);


// 15. Using both "human", begin another conditional statement. At this time, leave the statements blank.
//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank
if(human == 'rock'){
  if(human == computer){
    console.log('It\'s a draw!');
   }
   if(computer == 'scissors'){
     console.log('You win!');
   }
   if(computer == 'paper'){
     console.log('You lose!');
   }
 }
 if(human == 'paper'){
  if(human == computer){
    console.log('It\'s a draw!');
   }
   if(computer == 'scissors'){
     console.log('You lose!');
   }
   if(computer == 'rock'){
     console.log('You win!');
   }
 }
 if(human == 'scissors'){
  if(human == computer){
    console.log('It\'s a draw!');
   }
   if(computer == 'rock'){
     console.log('You lose!');
   }
   if(computer == 'paper'){
     console.log('You win!');
   }
 }


// 16. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.



// 17. Give yourself a high five for completing your first javascript game!

// 18. Use the game you made above and rework it using a switch statement.
// 19. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.


// HEDS ER TALES?
// 20. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 21. Use a do/while loop to keep flipping the coin until you get tails.

// 22. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.


// CHESS BOARD
// 23. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.
