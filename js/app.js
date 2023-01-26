//alert("Lets see how well you know me! O_O")


function nameSpell() {
  //Question 1
  let nameCheck = prompt("Is my name spelled Malik? Yes or No?").toLowerCase();
  if (nameCheck === 'no' || nameCheck === 'n') {
    console.log('You are correct!');
    alert('You are correct!');

  } else if (nameCheck === 'yes' || nameCheck === 'y') {
    console.log('Wow! And i thought we were Friends -_-!');
    alert('Wow! And i thought we were Friends -_-!');

  } else {
    console.log('you are the one that makes me have to write more code -_-! Yes or No please!');
    alert('you are the one that makes me have to write more code -_-! Yes or No please!');
  }
}

function militaryVet() {
  //Question 2
  let servedMil = prompt("Did i serve in the military? Yes or No?").toLowerCase();
  if (servedMil === 'yes' || servedMil === 'y') {
    console.log('You are correct!')
    alert('You are correct!')

  } else if (servedMil === 'no' || servedMil === 'n') {
    console.log('Wow! And i thought we were Friends -_-!');
    alert('Wow! And i thought we were Friends -_-!');

  } else {
    console.log('you are the one that makes me have to write more code -_-! Yes or No please!');
    alert('you are the one that makes me have to write more code -_-! Yes or No please!');

  }
}

function medicalField() {
  //Question 3
  let medicalField = prompt("Did i ever work in the medical field? Yes or No?").toLowerCase();

  if (medicalField === 'yes' || medicalField === 'y') {
    console.log('You are correct!')
    alert('You are correct!')

  } else if (medicalField === 'no' || medicalField === 'n') {
    console.log('Wow! And i thought we were Friends -_-!');
    alert('Wow! And i thought we were Friends -_-!');

  } else {
    console.log('you are the one that makes me have to write more code -_-! Yes or No please!')
    alert('you are the one that makes me have to write more code -_-! Yes or No please!')

  }
}

function bornWhere() {
  //Question 4
  let cityCheck = prompt("Was I born in Boston, MA? Yes or No?").toLowerCase();

  if (cityCheck === 'no' || cityCheck === 'n') {
    console.log('You are correct! I wish i had the accent though :(');
    alert('You are correct! I wish i had the accent though :(');

  } else if (cityCheck === 'yes' || cityCheck === 'y') {
    console.log('Incorrect, but i wish!');
    alert('Incorrect, but i wish!');

  } else {
    console.log('you are the one that makes me have to write more code -_-! Yes or No please!')
    alert('you are the one that makes me have to write more code -_-! Yes or No please!')

  }
}

function codingDojo() {
  //Question 5
  let schoolCheck = prompt("Do i attend class at Coding Dojo? Yes or No?").toLowerCase();

  if (schoolCheck === 'no' || schoolCheck === 'n') {
    console.log('Damn Right!');
    alert('Damn Right!');

  } else if (schoolCheck === 'yes' || schoolCheck === 'y') {
    console.log('Wow! Maybe you should go to coding dojo -_-! Incorrect');
    alert('Wow! Maybe you should go to coding dojo -_-! Incorrect');

  } else {
    console.log('you are the one that makes me have to write more code -_-! Yes or No please!');
    alert('you are the one that makes me have to write more code -_-! Yes or No please!');

  }
}

function favoriteNumber() {
  //Question 6
  let attempts = 4;
  let userInput = 0;

  while (attempts || userInput != num) {
    let num = 17
    userInput = parseInt(prompt("Guess my favorite Number! Pick a number 1 - 20"));
    if (userInput === num) {
      console.log("Correct");
      break
    }
    else {
      console.log("Incorrect");
      attempts--
    }
  }
}
nameSpell();
militaryVet();
medicalField();
bornWhere();
codingDojo();
favoriteNumber();
