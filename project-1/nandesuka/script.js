var kataEng = {
    1: 'a',
    2: 'i',
    3: 'u',
    4: 'e',
    5: 'o',
    6: 'ka',
    7: 'ki',
    8: 'ku',
    9: 'ke',
    10: 'ko',
    11: 'ga',
    12: 'gi',
    13: 'gu',
    14: 'ge',
    15: 'go',
    16: 'sa',
    17: 'shi',
    18: 'su',
    19: 'se',
    20: 'so',
    21: 'za',
    22: 'ji',
    23: 'zu',
    24: 'ze',
    25: 'zo',
    26: 'ta',
    27: 'chi',
    28: 'tsu',
    29: 'te',
    30: 'to',
    31: 'da',
    32: 'ji',
    33: 'zu',
    34: 'de',
    35: 'do',
    36: 'na',
    37: 'ni',
    38: 'nu',
    39: 'ne',
    40: 'no',
    41: 'ha',
    42: 'hi',
    43: 'fu',
    44: 'he',
    45: 'ho',
    46: 'ba',
    47: 'bi',
    48: 'bu',
    49: 'be',
    50: 'bo',
    51: 'pa',
    52: 'pi',
    53: 'pu',
    54: 'pe',
    55: 'po',
    56: 'ma',
    57: 'mi',
    58: 'mu',
    59: 'me',
    60: 'mo',
    61: 'ya',
    62: 'yu',
    63: 'yo',
    64: 'ra',
    65: 'ri',
    66: 'ru',
    67: 're',
    68: 'ro',
    69: 'wa',
    70: 'wo',
    71: 'n',
    72: '-',
};

var kataChar = {
    1: 'ア',
    2: 'イ',
    3: 'ウ',
    4: 'エ',
    5: 'オ',
    6: 'カ',
    7: 'キ',
    8: 'ク',
    9: 'ケ',
    10: 'コ',
    11: 'ガ',
    12: 'ギ',
    13: 'グ',
    14: 'ゲ',
    15: 'ゴ',
    16: 'サ',
    17: 'シ',
    18: 'ス',
    19: 'セ',
    20: 'ソ',
    21: 'ザ',
    22: 'ジ',
    23: 'ズ',
    24: 'ゼ',
    25: 'ゾ',
    26: 'タ',
    27: 'チ',
    28: 'ツ',
    29: 'テ',
    30: 'ト',
    31: 'ダ',
    32: 'ジ',
    33: 'ズ',
    34: 'デ',
    35: 'ド',
    36: 'ナ',
    37: 'ニ',
    38: 'ヌ',
    39: 'ネ',
    40: 'ノ',
    41: 'ハ',
    42: 'ヒ',
    43: 'フ',
    44: 'ヘ',
    45: 'ホ',
    46: 'バ',
    47: 'ビ',
    48: 'ブ',
    49: 'ベ',
    50: 'ボ',
    51: 'パ',
    52: 'ピ',
    53: 'プ',
    54: 'ペ',
    55: 'ポ',
    56: 'マ',
    57: 'ミ',
    58: 'ム',
    59: 'メ',
    60: 'モ',
    61: 'ヤ',
    62: 'ユ',
    63: 'ヨ',
    64: 'ラ',
    65: 'リ',
    66: 'ル',
    67: 'レ',
    68: 'ロ',
    69: 'ワ',
    70: 'ヲ',
    71: 'ン',
    72: 'ー',

};

var objectImages = [
['images/ramune.jpg', 'images/ramen.png','images/anime.jpg'],
['images/america.png','images/konbini.jpg','images/uniqlo.jpg']
//level 3
// []
];

var wordsArray = [
[['ra','mu','ne'], ['ra','me','n'] , ['a','ni','me']],
[['a','me','ri','ka'], ['ko','n','bi','ni'], ['yu','ni','ku','ro']] ];

var playerGuess =[];
var currentWord;
var currentImage;
var currentLevel = 1;;
var numTries = 0;
var correctLetter = 0;
var m = 0;
var b = 0;

//function to loop and display images and set current word
function showImage() {
        var i = 0;
        var j = 0;
        currentImage = document.createElement('img');
        currentImage.src = objectImages[i][j];
        document.querySelector('.object-image').appendChild(currentImage);
        currentImage.className = 'img';
        currentWord = wordsArray[i][j];
        console.log(currentWord);
};

//function to display the squares and add event listener
var showBoard = function() {
    document.querySelector('h6').style.visibility = 'visible';
    document.querySelector('#player-guess').style.visibility = 'visible';
    for (var k = 1; k < 73; k++) {
        var square = document.createElement('div');
        console.log('create square ' +k);
        square.className = 'square';
        square.id = k;
        square.value = kataEng[k];
        console.log(square.value);
        document.querySelector('.gameboard').appendChild(square);
        square.innerHTML = kataChar[k];
        console.log(kataChar[k]);
        square.addEventListener('click',checkLetter);
    }
};

//click start button to display image, set word show board
document.querySelector('#start').addEventListener('click', showImage);
document.querySelector('#start').addEventListener('click', showBoard);

//function to check if letter selected is correct or wrong

var checkLetter = function() {
    document.querySelector('#start').style.visibility = 'hidden';
    console.log('clicked sq');
    console.log(currentWord);
    numTries++;
    console.log('number of tries ' +numTries);
//check if number of tries more than number of letters
    if (numTries > currentWord.length+1) {
        console.log('lose');
        document.querySelector('#next').style.visibility = 'visible';
        document.querySelector('#displaymsg').style.visibility = 'visible';
        document.querySelector('#displaymsg').innerHTML = 'Number of attempts exceeded! Try next word.';
    }
    else {
        var playerLetter = this.value;
        console.log('player selected: ' + playerLetter);
        if (correctLetter !== currentWord.length) {
            // var m = 0;
            if (playerLetter === currentWord[m]) {
                 document.querySelector('#displaymsg').innerHTML = '';
                correctLetter = correctLetter + 1;
                console.log('correct letter(s): '+correctLetter);
                playerGuess.push(playerLetter);
                console.log('player guess: ' + playerGuess);
                document.querySelector('#player-guess').innerHTML += this.textContent;
                m = m + 1;
                if (correctLetter === currentWord.length) {
                    console.log('win');
                    document.querySelector('#next').style.visibility = 'visible';
                    document.querySelector('#displaymsg').style.visibility = 'visible';
                    document.querySelector('#displaymsg').innerHTML = 'Correct word 🥳';
                }
            }
//when wrong letter is guesssed
            else {
                console.log('nope');
                document.querySelector('#displaymsg').style.visibility = 'visible';
                document.querySelector('#displaymsg').innerHTML = 'Nope 👻';
            }
//check if the entire word is guessed correctly
        }
        else if (correctLetter === currentWord.length) {
            console.log('win');
            document.querySelector('#next').style.visibility = 'visible';
            document.querySelector('#displaymsg').style.visibility = 'visible';
            document.querySelector('#displaymsg').innerHTML = 'Correct word 🥳';
        }
    }
};

//clear and show
document.querySelector('#next').addEventListener('click', changeImage);

//show next image and set word for Level 1
function changeImage() {
        m = 0;
        b = b + 1;
        console.log('b = '+b);
        if (b < objectImages[currentLevel-1].length) {
            console.log(currentLevel);
            currentImage.src = objectImages[currentLevel-1][b];
            currentWord = wordsArray[currentLevel-1][b];
            console.log(currentWord);
            document.querySelector('#next').style.visibility = 'hidden';
            document.querySelector('#displaymsg').style.visibility = 'hidden';
            numTries = 0;
            correctLetter = 0;
            playerGuess =[];
            document.querySelector('#player-guess').innerHTML = '';
        }
//check if complete current level and progress
        else if(b === objectImages[currentLevel-1].length) {
            currentLevel++;
            console.log('current level' + currentLevel);
            document.querySelector('#displaymsg').innerHTML = 'Progress to Level ' + currentLevel;
            document.querySelector('#player-guess').innerHTML = '';

            b = -1;
        }
};