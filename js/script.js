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

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);11

if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
    computerMove = 'papier';
} else if (randomNumber == '3') {
  computerMove = 'nożyce';
}
printMessage('Komputera ruch: ' + computerMove);

/// new part 

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);


1
if (playerInput == '1') {
  playerMove = 'kamień';
  playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
} else {
    playerMove = 'kamień';
    printMessage('Błędny wybór: Domyślnie wybrano: kamień')
}

printMessage('Twój ruch: ' + playerMove);