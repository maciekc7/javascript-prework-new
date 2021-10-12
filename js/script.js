var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

var playerMove;
playerMove = 'papier'
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

/// org randomNumber ///

var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);


/// Zmień powyższy kod tak, aby dodatkowo losował liczbę całkowitą od 11 do 19. //

var myRandomNumber;
myRandomNumber = Math.floor(Math.random() * 9 + 1 + 10);
printMessage('Wylosowana liczba z przedziału od 11 do 19 to: ' + myRandomNumber);

