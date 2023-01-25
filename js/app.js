alert("Lets see how well you know me! O_O")

//Question 1
let nameCheck = prompt("Is my name spelled Malik? Yes or No?").toLowerCase();
if (nameCheck === 'no' || nameCheck === 'n') {
  console.log('You are correct!')
} else if (nameCheck === 'yes' || nameCheck === 'y') {
  console.log('Wow! And i thought we were Friends -_-!');
} else {
  console.log('you are the one that makes me have to write more code -_-! Yes or No please!')
}

//Question 2
let servedMil = prompt("Did i serve in the military? Yes or No?").toLowerCase();
if (servedMil === 'yes' || servedMil === 'y') {
  console.log('You are correct!')
} else if (servedMil === 'no' || servedMil === 'n') {
  console.log('Wow! And i thought we were Friends -_-!');
} else {
  console.log('you are the one that makes me have to write more code -_-! Yes or No please!')
}

let medicalField = prompt("Did i ever work in the medical field? Yes or No?").toLowerCase();

if (medicalField === 'yes' || medicalField === 'y') {
  console.log('You are correct!')
} else if (medicalField === 'no' || medicalField === 'n') {
  console.log('Wow! And i thought we were Friends -_-!');
} else {
  console.log('you are the one that makes me have to write more code -_-! Yes or No please!')
}

let cityCheck = prompt("Was I born in Boston, MA? Yes or No?").toLowerCase();

if (cityCheck === 'no' || cityCheck === 'n') {
  console.log('You are correct! I wish i had the accent though :(')
} else if (cityCheck === 'yes' || cityCheck === 'y') {
  console.log('Incorrect, but i wish!');
} else {
  console.log('you are the one that makes me have to write more code -_-! Yes or No please!')
}

let schoolCheck = prompt("Do i attend class at Coding Dojo? Yes or No?").toLowerCase();

if (schoolCheck === 'no' || schoolCheck === 'n') {
  console.log('Damn Right!')
} else if (schoolCheck === 'yes' || schoolCheck === 'y') {
  console.log('Wow! Maybe you should go to coding dojo -_-! Incorrect');
} else {
  console.log('you are the one that makes me have to write more code -_-! Yes or No please!')
}