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
    73: '',
    74: '',
    75: '',
    76: '',
    77: '',
};

var objectImages = [
//level1
['images/ramune.jpg', 'images/ramen.png','images/anime.jpg'],
//level 2
['images/america.png','images/konbini.jpg','images/uniqlo.jpg']
//level 3
// []
];

var wordsArray = [
[['ra','mu','ne'], ['ra','me','n'] , ['a','ni','me']],
[['a','me','li','ca'], ['ko','n','bi','ni'], ['u','ni','ku', 'ro']] ];
var playerGuess =[];
var currentWord;
var currentLevel;
var i = 0;

//function to loop and display images and set current word
function showImage() {
        var j = 0;
        var currentImage = document.createElement('img');
        currentImage.src = objectImages[i][j];
        document.querySelector('.object-image').appendChild(currentImage);
        currentImage.className = 'img';
        currentWord = wordsArray[i][j];
        console.log(currentWord);
        i++;
        j++;
};

//function to display the squares add event listener
var showBoard = function() {
    for (var k = 1; k < 78; k++) {
        var square = document.createElement('div');
        console.log('create square ' +k);
        square.className = 'square';
        square.id = k;
        square.value = kataEng[k];
        console.log(square.value);
        document.querySelector('.gameboard').appendChild(square);
        square.innerHTML = kataChar[k];
        square.addEventListener('click', checkLetter);
    }
};

//click start button to display image, set word show board
document.querySelector('#start').addEventListener('click', showImage);
document.querySelector('#start').addEventListener('click', showBoard);
//make hidden use xx.className

//function to check letter selected
var checkLetter = function() {
    console.log('clicked sq ');

// increase numTries
//     if (  numTries > wordbank [ i ] [ j ]. length) {
//         show next button;
//     }
//     else {
//         var letterchosen = square clicked

//         for ( j = 0; j < word.length; j++)
//             if (letterchosen === wordbank [ i ] [ j ] ) {
//                 show correct button;
//                 increase correct letter count ++,
//                 push the letterchosen to player guess array,
//                 innerHTML the correct ‘kata’ to player guess box,

//             if no, show wrong button.
//     }


};
// //add event listener for every square in html
// for(i = 0; i < 9; i++) {
//     sqArray[i].addEventListener('click', clickSq);
// }

//show if word guessed is correct or wrong
// var showWordResult = function() {
//     document.querySelector('#result');

//  if (true){
//     .innerHTML = 'Correct';
//  }
//  else {
//     .innerHTML = 'Wrong';
//  }
// }