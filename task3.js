// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную
// строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function findLongestWord(string = '') {
  let splittedString = string.split(' ');
  let longestWord = splittedString[0];

  for (let i = 1; i < splittedString.length; i += 1) {
    let wordsLength = splittedString[i].length; // переменная равна длине нулевого слова

    if (longestWord.length < wordsLength) {
      longestWord = splittedString[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'
