// var computerMove;
// computerMove = 'kamień';
// printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

// var playerMove;
// playerMove = 'papier'
// printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

/// org randomNumber ///

// var randomNumber;
// randomNumber = Math.floor(Math.random() * 3 + 1);
// printMessage('Wylosowana liczba to: ' + randomNumber);


/// Zmień powyższy kod tak, aby dodatkowo losował liczbę całkowitą od 11 do 19. //

// var myRandomNumber;
// myRandomNumber = Math.floor(Math.random() * 9 + 1 + 10);
// printMessage('Wylosowana liczba z przedziału od 11 do 19 to: ' + myRandomNumber);


/// org code

// var computerMove, randomNumber;
// randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log('wylosowana liczba to: ' + randomNumber);

// if (randomNumber == '1') {
//   computerMove = 'kamień';
// } else {
//   computerMove = 'nieznany ruch';
// }
// printMessage('Mój ruch: ' + computerMove);


/// my code

// var computerMove, randomNumber;
// randomNumber = Math.floor(Math.random() * 3 + 1);
// console.log('wylosowana liczba to: ' + randomNumber);11

// if (randomNumber == '1') {
//   computerMove = 'kamień';
// } else if (randomNumber == '2') {
//     computerMove = 'papier';
// } else if (randomNumber == '3') {
//   computerMove = 'nożyce';
// }
// printMessage('Komputera ruch: ' + computerMove);

// /// new part 

// var playerMove, playerInput;
// playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
// console.log('Wpisana odpowiedź to: ' + playerInput);


// 1
// if (playerInput == '1') {
//   playerMove = 'kamień';
//   playerMove = 'papier';
// } else if (playerInput == '3'){
//     playerMove = 'nożyce';
// } else {
//     playerMove = 'kamień';
//     printMessage('Błędny wybór: Domyślnie wybrano: kamień')
// }

// printMessage('Twój ruch: ' + playerMove);

/// org who win 

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;


function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
      return 'papier'
  } else if (argMoveId == 3) {
      return 'nożyce'
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}


function displayResult(argPlayerMove, argComputerMove) {
console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
} else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
} else {
    printMessage('Przegrywasz! :(');
}
    printMessage('Zagrałem(komputer) ' + argComputerMove + ', a Ty(gracz) ' + argPlayerMove);
}

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

